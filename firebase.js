// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-fabab.firebaseapp.com",
  projectId: "twitter-fabab",
  storageBucket: "twitter-fabab.appspot.com",
  messagingSenderId: "397947799499",
  appId: "1:397947799499:web:b8ac30d5af4a82a52e184e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
