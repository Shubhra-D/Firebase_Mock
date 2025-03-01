// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD25036TICZ0g3S6mqMJkd2ApXg9gFxTjM",
  authDomain: "book-tracker-19fcd.firebaseapp.com",
  projectId: "book-tracker-19fcd",
  storageBucket: "book-tracker-19fcd.firebasestorage.app",
  messagingSenderId: "145475524797",
  appId: "1:145475524797:web:37fe23ac47e1b644e7ffd4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider(app)