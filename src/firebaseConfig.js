import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwmTNQq6xlXCet_ohdhFp-7gshxuHKcSc",
  authDomain: "evocabank-web.firebaseapp.com",
  projectId: "evocabank-web",
  storageBucket: "evocabank-web.firebasestorage.app",
  messagingSenderId: "963891953757",
  appId: "1:963891953757:web:4c5657b456560f331c0db4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export { signInWithPopup, signOut, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp, setDoc, doc };