from firebase_admin_setup import db, auth
from utils import encrypt_data

user = auth.get_user_by_email("coolerputt@gmail.com")
uid = user.uid
initial_balance = encrypt_data("0")

db.collection("allUsers").document(uid).set({
    "balance": initial_balance
})
