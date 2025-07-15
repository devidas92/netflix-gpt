// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1_AgXfrqH-qjaIBKGLSTV5is-ByfG_Tw",
  authDomain: "netflix-gpt-8cac9.firebaseapp.com",
  projectId: "netflix-gpt-8cac9",
  storageBucket: "netflix-gpt-8cac9.firebasestorage.app",
  messagingSenderId: "246110809222",
  appId: "1:246110809222:web:9999732397f692c277b507",
  measurementId: "G-XH4G74R0XQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
