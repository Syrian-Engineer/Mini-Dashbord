// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBuJ4xeE0FmbvOJL6GMyDq0U8qInAcKlw",
  authDomain: "dashbord-9a6de.firebaseapp.com",
  projectId: "dashbord-9a6de",
  storageBucket: "dashbord-9a6de.firebasestorage.app",
  messagingSenderId: "1033182502602",
  appId: "1:1033182502602:web:d600af44cc3f43956b9e33",
  measurementId: "G-R1M181H200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);