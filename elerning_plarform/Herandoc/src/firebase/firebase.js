// Importa los servicios de Firebase que necesitas
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de TU NUEVO PROYECTO (heran76devacademy)
const firebaseConfig = {
  apiKey: "AIzaSyBBIZG0f59ZAE6t2_f6Zcl-Q82IVUz_nkk",
  authDomain: "heran76devacademy.firebaseapp.com",
  projectId: "heran76devacademy",
  storageBucket: "heran76devacademy.firebasestorage.app",
  messagingSenderId: "119841811283",
  appId: "1:119841811283:web:d166567a3d1127ad734fa6"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta los servicios que usarás en tu app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);