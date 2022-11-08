// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import 'firebase/storage';  

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6rRZ6XZMHqQ1QSIhKFTu9NQACk3oauwc",

  authDomain: "eduhacks-1e2bb.firebaseapp.com",

  projectId: "eduhacks-1e2bb",

  storageBucket: "eduhacks-1e2bb.appspot.com",

  messagingSenderId: "226519930960",

  appId: "1:226519930960:web:ecefa27322f6f477475955",

  measurementId: "G-97MPN4NYN2"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth=getAuth(app) ;

const storage = getStorage(app)

export  {db,auth, storage}