// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQKcRsRX8JzDGRsPQ7RrQlEnYKSk5Y45k",
  authDomain: "myfirstapp-25d5a.firebaseapp.com",
  projectId: "myfirstapp-25d5a",
  storageBucket: "myfirstapp-25d5a.firebasestorage.app",
  messagingSenderId: "165738304035",
  appId: "1:165738304035:web:56b5fd16daa1da17a95796",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
