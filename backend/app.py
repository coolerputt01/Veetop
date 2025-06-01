from fastapi import FastAPI, Request, Header
from fastapi.responses import JSONResponse
from firebase_admin_setup import db , auth
from utils import verify_signature, decrypt_data, encrypt_data
import os
import datetime
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

def test_auth():
    users = auth.list_users().users
    for user in users:
        print("User:", user.email)

@app.post('/monnify-webhook')
async def handleWebHook( request: Request,monnify_signature: str = Header(None)):

    body = await request.json()

    if not verify_signature(body, monnify_signature):
        return JSONResponse(content={"error": "Invalid signature"}, status_code=403)
    
    if body.get("eventType") != "SUCCESSFUL_TRANSACTION":
        return JSONResponse(content={"error": "Invalid event type"}, status_code=400)
    
    data = body["eventData"]
    email = data["customer"]["email"].strip().lower()
    amount_paid = float(data["amountPaid"])
    transaction_id = data["transactionReference"]

    try:
        user_record = auth.get_user_by_email(email)
        user_uid = user_record.uid
    except:
        return JSONResponse(content={"error": "User not found"}, status_code=404)
    
    user_doc = db.collection("allUsers").document(user_uid).get()
    if not user_doc.exists:
        return JSONResponse(content={"error": "User doc missing"}, status_code=404)

    user_data = user_doc.to_dict()
    decrypted_balance = float(decrypt_data(user_data["balance"]))

    credit_amount = round(amount_paid * 0.985, 2)
    new_balance = decrypted_balance + credit_amount

    db.collection("allUsers").document(user_uid).update({
        "balance": encrypt_data(str(new_balance))
    })

    db.collection("transactions").document(user_uid).collection("history").add({
        "transactionID": transaction_id,
        "amount": credit_amount,
        "type": "credit",
        "service": "bankDeposit",
        "description": "Account funding via Monnify",
        "timestamp": datetime.datetime.utcnow()
    })

    admin_uid = os.getenv("ADMIN_UID")
    admin_doc = db.collection("allUsers").document(admin_uid).get()
    admin_data = admin_doc.to_dict()
    admin_balance = float(decrypt_data(admin_data["balance"]))

    admin_new_balance = admin_balance - amount_paid
    db.collection("allUsers").document(admin_uid).update({
        "balance": encrypt_data(str(admin_new_balance))
    })

    db.collection("transactions").document(admin_uid).collection("history").add({
        "transactionID": transaction_id,
        "amount": amount_paid,
        "type": "debit",
        "description": "Bank transfer fee settlement",
        "timestamp": datetime.datetime.utcnow(),
        "sender": {"username": "banktransfer-null", "fullName": "BankTransfer"},
        "recipient": {"username": "VeeTop", "fullName": "VeeTop App"},
    })
    return JSONResponse(content={"message": "Transaction processed successfully"}, status_code=200)
