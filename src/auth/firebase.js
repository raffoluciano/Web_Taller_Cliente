// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEdbpScm8uG7cd3_jiGCs55Qi8_FcMQLg",
  authDomain: "taller-50fdc.firebaseapp.com",
  projectId: "taller-50fdc",
  storageBucket: "taller-50fdc.appspot.com",
  messagingSenderId: "754859259081",
  appId: "1:754859259081:web:151f90d45ab869ea7e0918"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);