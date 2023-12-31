import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBB71YsqCdYFQLu9z9God_Bsr-NEugy2dU",
  authDomain: "smart-wallet-bf19a.firebaseapp.com",
  projectId: "smart-wallet-bf19a",
  storageBucket: "smart-wallet-bf19a.appspot.com",
  messagingSenderId: "397546740554",
  appId: "1:397546740554:web:34568f3cbaa1db71dabfb3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);



