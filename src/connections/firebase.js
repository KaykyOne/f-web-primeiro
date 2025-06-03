// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // 👈 Importa o Auth também

const firebaseConfig = {
  apiKey: "AIzaSyA9ugMILKd8NSCpavzAuSvk9lJsqzN_LFw",
  authDomain: "desgostodocarai.firebaseapp.com",
  databaseURL: "https://desgostodocarai-default-rtdb.firebaseio.com",
  projectId: "desgostodocarai",
  storageBucket: "desgostodocarai.firebasestorage.app",
  messagingSenderId: "965636850678",
  appId: "1:965636850678:web:dca2020a62b0abe88c3dd7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app); // 👈 Aqui inicializa o Auth corretamente

export { db, auth }; // 👈 Exporta o Auth também
