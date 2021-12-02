import db from "../firebase/firebase-init";
import { collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";

function ShowNote(){
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, 'notes'),(doc)=>{
            setDatos(doc.docs.map((doc) =>({...doc.data(),id: doc.id}))) //Recovering the ID
        })
    })

    return(
        <div className='divShowNote'> {datos.map((note)=>(
            <div key={note.id} >
            <p className='allNotes'>{note.title} {note.note}</p>
            
            </div>))
            
            }
        </div>
    );

    
}
export default ShowNote;