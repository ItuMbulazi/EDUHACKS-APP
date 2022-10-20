// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDopUG1C1u92JofznazlBbuvvshdZsQTe4",
  authDomain: "eduhacks-2643a.firebaseapp.com",
  projectId: "eduhacks-2643a",
  storageBucket: "eduhacks-2643a.appspot.com",
  messagingSenderId: "517933864862",
  appId: "1:517933864862:web:bee4b531afa1a57074688f",
  measurementId: "G-K9XLB29R3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth=getAuth(app) ;

const storage = getStorage(app)

export  {db,auth, storage}