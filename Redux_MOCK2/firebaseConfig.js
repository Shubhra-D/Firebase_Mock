// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI-SzR5XY-cmBbfed7Qli09icNEPleQII",
  authDomain: "mock-firebase-ca5fa.firebaseapp.com",
  projectId: "mock-firebase-ca5fa",
  storageBucket: "mock-firebase-ca5fa.firebasestorage.app",
  messagingSenderId: "97661832662",
  appId: "1:97661832662:web:14757cda2c1a2ef0fd2877",
  measurementId: "G-1P74BQPY70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const provider = new GoogleAuthProvider(app);