import db from "../firebase/firebase-init";
import { collection, onSnapshot } from "@firebase/firestore";
import { useState, useEffect } from "react";
import trash from "../img/trash.png"
import pen from "../img/pen.png"

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
            <p className='paragraphNoteTitle' >{note.title}</p>
            <p className='paragraphNoteText' >{note.note}</p>
            <div className='divEraseEdit'>
            <img src={pen} alt='pen' className='editImg'></img>
            <img src={trash} alt='trash' className='eraseImg'></img>
            </div>
            </div>))
            
            }
        </div>
    );

}
export default ShowNote;