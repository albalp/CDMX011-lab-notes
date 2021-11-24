
import db from "./firebase-init";
import { collection, addDoc } from "firebase/firestore";
import {  getDocs } from "firebase/firestore";

export const AddingNotes = async(e) =>{
try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

export const ViewNotes = async(e) =>{

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}