// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7b2oACmifQl03-_a6zj0mig1C2IcMitw",
  authDomain: "shana-chan-site.firebaseapp.com",
  projectId: "shana-chan-site",
  storageBucket: "shana-chan-site.firebasestorage.app",
  messagingSenderId: "928261399891",
  appId: "1:928261399891:web:cb13ff277a37d3c738ada6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

signInAnonymously(auth).then(()=>console.log("signed in")).catch((error)=>console.error("couldn't sign in", error));

export {auth, db};