// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcEpXYE4s69gOD50wK1VWjbvSyg6lgQAo",
  authDomain: "bike-commutr-sam-p.firebaseapp.com",
  projectId: "bike-commutr-sam-p",
  storageBucket: "bike-commutr-sam-p.appspot.com",
  messagingSenderId: "171312820203",
  appId: "1:171312820203:web:d9561d3bc765ff7e6cb3ae"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export function signInWithGoogle() {
    signInWithPopup(auth, authProvider);
}

export function signOut() {
    auth.signOut();
}