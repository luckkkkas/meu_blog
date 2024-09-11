// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA1-omwYU9egDsKnZjSZ-_hdwsg_S8-30",
  authDomain: "blog-a01ba.firebaseapp.com",
  projectId: "blog-a01ba",
  storageBucket: "blog-a01ba.appspot.com",
  messagingSenderId: "770619137919",
  appId: "1:770619137919:web:c97864b0295d34d408c44a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const auth = getAuth();

export {db};