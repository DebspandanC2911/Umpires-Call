// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "umpires-call-11e86.firebaseapp.com",
  projectId: "umpires-call-11e86",
  storageBucket: "umpires-call-11e86.appspot.com",
  messagingSenderId: "849154185350",
  appId: "1:849154185350:web:33199ec4b6ecd90d32d907"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
