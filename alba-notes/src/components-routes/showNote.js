import db from "../firebase/firebase-init";
import { collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";
import { doc, deleteDoc, setDoc } from "firebase/firestore";
import eliminar from "../img/eliminar.png"
import editar from "../img/editar.png"

function ShowNote(){
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        onSnapshot(collection(db, 'notes'),(doc)=>{
            
            setDatos(doc.docs.map((doc) =>({...doc.data(),id: doc.id}))) //Recovering the ID
        })
    })

    const deleteNote = async(id) =>{
        
        if(window.confirm('¿Estás seguro de querer eliminar esta nota?') === true){
            const noteDoc = doc(db,'notes',id);
            await deleteDoc(noteDoc)
            console.log('Successfully deleted note ' + id)
        }
    }
    
    
    return(
        <div className='divShowNote'> {datos.map((note)=>(
            <div key={note.id} className='allNotes'>
            <p className='paragraphNoteTitle' >{note.title}</p>
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