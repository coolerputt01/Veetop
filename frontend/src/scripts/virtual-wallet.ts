import axios from 'axios';
import { firestore,auth } from './firebase';
import { doc, collection, addDoc, serverTimestamp } from 'firebase/firestore';


const vtpass = axios.create({
  baseURL: "https://sandbox.vtpass.com/api",
  headers: {
    "Content-Type": "application/json",
    "api-key": "06f1905d97c40a6cef3583eab4a89c48",
    "public-key": "PK_7004886e7026eed159ddc556bbb9fa00365fa4cb206",
    "secret-key": "SK_587a4c022b43ec4e62fd2ea80afae21d60855e04bd7"
  }
});

function generateTransactionID() : number {
  const min = Math.pow(10, 13 - 1);
  const max = Math.pow(10, 13) - 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function buyAirtime(phone: string, amount: number, network: string, request_id: string){
  const payload = {
    request_id,
    serviceID: network,
    billersCode: phone,
    variation_code: "",
    amount,
    phone
  }
  try{
    const user = auth.currentUser;
    if (!user) {
        return
    }

    const userDocRef = doc(firestore, "users", user.uid);
    const transactionsCollection = collection(userDocRef, "transactions");

    const res = await vtpass.post("/pay", payload);

    const transactionData = {
      type: "airtime",
      amount,
      phone,
      network,
      request_id,
      status: res.data?.code === "000" ? "successful" : "failed",
      createdAt: serverTimestamp(),
      transactionID: generateTransactionID()
    };

    await addDoc(transactionsCollection, transactionData);

    return res.data;
  }catch(error:unknown){
    if( axios.isAxiosError(error)){
        console.error('Axios Error:', error.message);
    }
    else if (error instanceof Error) {
      console.error('Normal Error', error.message);
    } else {
        console.error(error);
    }
  }
}