import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3uaOwe6z6djgZIHMTia0f8c1ydsQe2vE",
  authDomain: "instant-chat-ed8fd.firebaseapp.com",
  projectId: "instant-chat-ed8fd",
  storageBucket: "instant-chat-ed8fd.appspot.com",
  messagingSenderId: "434145950533",
  appId: "1:434145950533:web:b6943a9a90317d82f55c2c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
