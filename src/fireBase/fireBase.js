import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBm4A18tr4PdwfbE8DF23a8l3V6FuOf6ao",
    authDomain: "tomasfransoireact.firebaseapp.com",
    projectId: "tomasfransoireact",
    storageBucket: "tomasfransoireact.appspot.com",
    messagingSenderId: "217795719186",
    appId: "1:217795719186:web:9405e1b2416f8cd06668cb",
    measurementId: "G-H2ENC6KK08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)