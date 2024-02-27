// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFIMAynW6ZzfiCgM1hYqmM-itUxCktyG0",
    authDomain: "photo-manager-56429.firebaseapp.com",
    projectId: "photo-manager-56429",
    storageBucket: "photo-manager-56429.appspot.com",
    messagingSenderId: "1061162858841",
    appId: "1:1061162858841:web:19687d8782bb2bd9627448",
    measurementId: "G-2S2CHEF7PT"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
