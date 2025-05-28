import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore , doc ,getDoc } from 'firebase/firestore';

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

const getUser = async () => {
    const user = auth.currentUser;

    if (!user) {
        console.error("No user is currently signed in.");
        return;
    }

    try {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData && typeof userData === 'object' && 'fullname' in userData) {
                return (userData as { fullname: string }).fullname;
            } else {
                console.error("User data does not contain 'fullname'.");
                return;
            }
        } else {
            console.error("User document not found.");
            return;
        }
    }catch(error: unknown) {
        if(error instanceof Error){
            console.error("A normal error occurred", error);
        }else {
            console.error("A text error",error);
        }
    }
}

export { app , auth ,firestore, getUser}