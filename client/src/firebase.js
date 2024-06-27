// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4391d.firebaseapp.com",
  projectId: "mern-estate-4391d",
  storageBucket: "mern-estate-4391d.appspot.com",
  messagingSenderId: "593009605043",
  appId: "1:593009605043:web:3cae98ebbb87b704c7f3c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);