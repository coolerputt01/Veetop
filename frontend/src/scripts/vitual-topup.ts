import axios, { type AxiosResponse } from 'axios';
// import { firestore,auth } from './firebase';
// import { doc, collection, addDoc, serverTimestamp } from 'firebase/firestore';


const corsProxy : string = "https://cors-anywhere.herokuapp.com/";

const vtuAxiosRequest = axios.create({
  baseURL: corsProxy+"https://tosyconcept.com/api",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Token 3054059d27fbca1c60ef6a8964cf46afd9b450b5",
  }
});

// function generateTransactionID() : number {
//   const min = Math.pow(10, 13 - 1);
//   const max = Math.pow(10, 13) - 1;
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

async function getUser() {
  try{
    const response : AxiosResponse = await vtuAxiosRequest.get('/user');
    console.log(response.data);
  }catch(error : unknown) {
    if(axios.isAxiosError(error)){
      console.error("Axios Error:", error);
    }else if(error instanceof Error){
      console.error("Normal Error:",error.message);
    }else {
      console.error("Plain Error:",error);
    }
  }
}

async function buyData() {
  try {
    const res : AxiosResponse = await vtuAxiosRequest.post('/data',
      {"network":"mtn",
      "mobile_number": "09095263835",
      "plan": 207,
      "Ported_number":true
    });
    console.log(res.data);
  }catch(error:unknown) {
    if(axios.isAxiosError(error)){
      console.error("Axios Error:", error);
    }else if(error instanceof Error){
      console.error("Normal Error:",error.message);
    }else {
      console.error("Plain Error:",error);
    }
  }
}

async function buyAirtime() {
  try {
    const res : AxiosResponse = await vtuAxiosRequest.post('/topup/',
      {
        "network":3,
        "amount":100,
        "mobile_number":"9065979408",
        "Ported_number":true,
        "airtime_type":"VTU"
    });
    console.log(res.data);
  }catch(error:unknown) {
    if(axios.isAxiosError(error)){
      console.error("Axios Error:", error);
    }else if(error instanceof Error){
      console.error("Normal Error:",error.message);
    }else {
      console.error("Plain Error:",error);
    }
  }
}

async function getAllDataTransaction() {
  try {
    const res : AxiosResponse = await vtuAxiosRequest.get('/data/');
    console.log(res.data);
  }catch(error:unknown) {
    if(axios.isAxiosError(error)){
      console.error("Axios Error:", error);
    }else if(error instanceof Error){
      console.error("Normal Error:",error.message);
    }else {
      console.error("Plain Error:",error);
    }
  }
}

async function queryDataTransaction(id:number) {
  try {
    const res : AxiosResponse = await vtuAxiosRequest.get('/data/'+ id);
    console.log(res.data);
  }catch(error:unknown) {
    if(axios.isAxiosError(error)){
      console.error("Axios Error:", error);
    }else if(error instanceof Error){
      console.error("Normal Error:",error.message);
    }else {
      console.error("Plain Error:",error);
    }
  }
}

async function queryAirtimeTransaction(id:number) {
  try {
    const res : AxiosResponse = await vtuAxiosRequest.get('/topup/'+ id);
    console.log(res.data);
  }catch(error:unknown) {
    if(axios.isAxiosError(error)){
      console.error("Axios Error:", error);
    }else if(error instanceof Error){
      console.error("Normal Error:",error.message);
    }else {
      console.error("Plain Error:",error);
    }
  }
}

export { getUser,buyData ,buyAirtime, getAllDataTransaction ,queryDataTransaction,queryAirtimeTransaction}