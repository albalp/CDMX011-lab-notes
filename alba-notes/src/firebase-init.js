// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYomMEZdzCK6PVFRBkABkNL0ECOmGyzi4",
  authDomain: "note-my-notes.firebaseapp.com",
  projectId: "note-my-notes",
  storageBucket: "note-my-notes.appspot.com",
  messagingSenderId: "539819125415",
  appId: "1:539819125415:web:63375bb8db22377d9cc982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

