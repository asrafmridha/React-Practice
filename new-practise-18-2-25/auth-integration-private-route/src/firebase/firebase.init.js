// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDILj6Ti9js9xfbMrdY7lHErhlZjHkOaiQ",
  authDomain: "email-password-auth-11880.firebaseapp.com",
  projectId: "email-password-auth-11880",
  storageBucket: "email-password-auth-11880.appspot.com",
  messagingSenderId: "951407030188",
  appId: "1:951407030188:web:27d0368563508ddb0e9409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);