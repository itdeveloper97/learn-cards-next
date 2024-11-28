// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiMkMmdYJcbm-k5wq_UScXcEmdOZrKyM8",
  authDomain: "learn-cards-492a3.firebaseapp.com",
  databaseURL:
    "https://learn-cards-492a3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learn-cards-492a3",
  storageBucket: "learn-cards-492a3.appspot.com",
  messagingSenderId: "780764443029",
  appId: "1:780764443029:web:42418d1d75877890d6069c",
  measurementId: "G-FLRK5R8PBG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

export default app;
