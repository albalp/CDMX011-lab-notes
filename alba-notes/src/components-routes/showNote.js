import db from "../firebase/firebase-init";
import { Firestore, collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";

function ShowNote(){
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, 'notes'),(doc)=>{
            setDatos(doc.docs.map((doc) =>({...doc.data(),id: doc.id}))) //Recovering the ID
        })
    })



    return(
        <div>{datos.map((note)=>(
            <div key={note.id}>
            <p>{note.title}</p>
            <p>{note.note}</p>
            </div>))
            
            }
        </div>
    );

    
}
export default ShowNote;