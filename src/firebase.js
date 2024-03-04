import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB161qpnsKwhh5F3acpvqs_cbpyUwgtvB4",
  authDomain: "instant-chat-e2934.firebaseapp.com",
  projectId: "instant-chat-e2934",
  storageBucket: "instant-chat-e2934.appspot.com",
  messagingSenderId: "669567694755",
  appId: "1:669567694755:web:0cef3d4ba4c6154dd08c16",
  measurementId: "G-3E21QC4JN2",
};

//Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
