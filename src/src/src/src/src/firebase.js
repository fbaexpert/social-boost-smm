// Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your actual Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyCwl9P1Vs8Fosdeg7Sz1bT4t5J0Ft-PZEc",
  authDomain: "social-boost-a31bd.firebaseapp.com",
  projectId: "social-boost-a31bd",
  storageBucket: "social-boost-a31bd.appspot.com",
  messagingSenderId: "8227529400",
  appId: "1:8227529400:web:1335fdf18893d3292f0a4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

