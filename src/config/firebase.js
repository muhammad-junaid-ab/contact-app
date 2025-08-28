// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzelhr0ldnxtWF-MYPiVQJirzyqGUHUTs",
  authDomain: "vite-email-contact.firebaseapp.com",
  projectId: "vite-email-contact",
  storageBucket: "vite-email-contact.firebasestorage.app",
  messagingSenderId: "559248173984",
  appId: "1:559248173984:web:0c01b3ca51924bd5a492c5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)