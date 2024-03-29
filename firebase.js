// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "twitter-clone-f81f4.firebaseapp.com",
  projectId: "twitter-clone-f81f4",
  storageBucket: "twitter-clone-f81f4.appspot.com",
  messagingSenderId: "927908836737",
  appId: "1:927908836737:web:7e079d4f06f96041ab2480",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();

const storage = getStorage();

export { app, db, storage };
