// lib/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1XNFEMvjHoL5XPKeTwnO5UKkXb4wp3M0",
  authDomain: "mxzone-da04a.firebaseapp.com",
  projectId: "mxzone-da04a",
  storageBucket: "mxzone-da04a.firebasestorage.app",
  messagingSenderId: "22758442824",
  appId: "1:22758442824:web:361d70a742de10e140d57d",
  measurementId: "G-DXHWV6FJCK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesCol = collection(db, "movies");
export { addDoc, getDocs };
