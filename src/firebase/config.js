import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAs6uWc9ZGkDUZbpcPqOUFik5uBtc1LGHY",
    authDomain: "coderhouse-ecommerce-473df.firebaseapp.com",
    projectId: "coderhouse-ecommerce-473df",
    storageBucket: "coderhouse-ecommerce-473df.firebasestorage.app",
    messagingSenderId: "197457503362",
    appId: "1:197457503362:web:8c8d2cc587cb15474cc09b",
    measurementId: "G-S2QBDV34XC"
    };

export const app = initializeApp(firebaseConfig);

