
import db from "./firebase-init";
import { collection, addDoc } from "firebase/firestore";
//import {  getDocs } from "firebase/firestore";
import { useState } from "react";



export const AddingNotes = async(e) =>{
    
try {
  const docRef = await addDoc(collection(db, "notes"), {
    title: "Alo",
    note: "Polesia"
  });
  console.log('Working') 
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

// export const ViewNotes = async(e) =>{

// const querySnapshot = await getDocs(collection(db, "notes"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// }