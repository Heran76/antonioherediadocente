// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc-y774IaHxO_uveTQDbv74ETWX0mDlLs",
  authDomain: "herandoc-elearning.firebaseapp.com",
  projectId: "herandoc-elearning",
  storageBucket: "herandoc-elearning.firebasestorage.app",
  messagingSenderId: "501669850120",
  appId: "1:501669850120:web:89b4d9df1d16af8085f5bd",
  measurementId: "G-TDJ81W7TH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Exporta los servicios que necesitarás
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);