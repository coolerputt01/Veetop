import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBeXR9xP2RA0I4L8XF_aeF-E3UGsqWFIzQ",
  authDomain: "veetop-a5fae.firebaseapp.com",
  projectId: "veetop-a5fae",
  storageBucket: "veetop-a5fae.firebasestorage.app",
  messagingSenderId: "76636660543",
  appId: "1:76636660543:web:662eaad589a0de3f98a98a"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app , auth ,firestore}