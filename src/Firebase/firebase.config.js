// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRWqpv8K4GaEHRDtQGD62_K1jMviPwh3E",
  authDomain: "news-portal-afdb2.firebaseapp.com",
  projectId: "news-portal-afdb2",
  storageBucket: "news-portal-afdb2.firebasestorage.app",
  messagingSenderId: "538668852828",
  appId: "1:538668852828:web:3a2e0e4d3cca1643f22899",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;