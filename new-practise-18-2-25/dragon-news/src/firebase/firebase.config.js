// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGbVrjlIVR8jBWgKmX4V5KXw3U5JEqjDw",
  authDomain: "dragon-news-51770.firebaseapp.com",
  projectId: "dragon-news-51770",
  storageBucket: "dragon-news-51770.firebasestorage.app",
  messagingSenderId: "77117421814",
  appId: "1:77117421814:web:600cc0ea180c27507a94d7",
  measurementId: "G-BY7FPN7R7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// const analytics = getAnalytics(app);