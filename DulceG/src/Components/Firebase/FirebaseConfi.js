// src/firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Tu configuración de Firebase (reemplaza estos valores con los tuyos)
const firebaseConfig = {
    apiKey: "AIzaSyArZMzP8oNVPaLKuRbE1KbHEHluBh_DUsQ",
    authDomain: "dulce-gustico.firebaseapp.com",
    projectId: "dulce-gustico",
    storageBucket: "dulce-gustico.firebasestorage.app",
    messagingSenderId: "506699190205",
    appId: "1:506699190205:web:6db7253cb68dfe61354cd4",
    measurementId: "G-JXK3CG0G8J"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
