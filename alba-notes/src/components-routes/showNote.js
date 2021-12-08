import db from "../firebase/firebase-init";
import { collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";
import eliminar from "../img/eliminar.png"
import editar from "../img/editar.png"
import deleteNote from "../firebase/delete-document";

function ShowNote(){
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, 'notes'),(doc)=>{
            
            setDatos(doc.docs.map((doc) =>({...doc.data(),id: doc.id}))) //Recovering the ID
        })
    })
    
    
    return(
        <div className='divShowNote'> {datos.map((note)=>(
            <div key={note.id} className='allNotes'>
            <p id='p' className='paragraphNoteTitle' >{note.title}</p>
            <p className='paragraphNoteText' >{note.note}</p>
            <div className='divEraseEdit'>
            <img src={editar} alt='pen' className='editImg'></img>
            <img src={eliminar} alt='trash' className='eraseImg' onClick={() => deleteNote(note.id)}></img>
            </div>
            </div>))
            
            }
        </div>
    );

}
export default ShowNote;