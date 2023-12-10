// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myservice-24fb1.firebaseapp.com",
  projectId: "myservice-24fb1",
  storageBucket: "myservice-24fb1.appspot.com",
  messagingSenderId: "135712986081",
  appId: "1:135712986081:web:9b4f7febbc74bedc1278a0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);