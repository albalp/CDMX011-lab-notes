import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebase-init'
import oldpen from '../img/oldpen.png';
import cerrarsesioncolores from '../img/cerrarsesioncolores.png'
import ShowNote from './showNote';

 const Notes = () => {

    const [writeNote,setwriteNote] = useState({
      title: '',
      note: ''
    })
     const saveNoteFirestore = (event) => {
      setwriteNote({
          ...writeNote,
          [event.target.name] : event.target.value
        })  
     }

    
     const AddingNotes = async(e) =>{
      e.preventDefault();
      const docRef = await addDoc(collection(db, "notes"), {
        title: writeNote.title,
        note: writeNote.note
      });
      console.log({docRef})
      console.log("Document written with ID: ", docRef.id );
    }
    const cli = document.getElementById('p')
   
      
    return (
      
      <div >
          <Link to = '/'>
          <div className='divExit'>
          <img className= 'exit' src={cerrarsesioncolores} alt='exit'></img>
          </div>
        </Link>
      <header className='div-notes'>
        <h1 className='div-title'>MY NOTES</h1>
       <img src={oldpen} alt='oldpen' className='oldPen'/>
        </header>
        <Fragment>
        <div className='div-notes'>
      <form className='newNote'  onSubmit={AddingNotes}> 
          
          <input className='input-note-title' placeholder='Título de la nota' type= 'text' name='title' onChange={saveNoteFirestore}></input>      
          <textarea placeholder='Escribe aquí tu nota' type= 'text' name='note' onChange={saveNoteFirestore} ></textarea>
          <button className='submitButton' type= 'submit' href={cli} >Save Note
          </button>
      </form>
      
      <ShowNote />
      </div>
      </Fragment>
      </div>
    
   
    );
  }


export default Notes;