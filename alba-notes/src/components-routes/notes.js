import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebase-init'
import oldpen from '../img/oldpen.png';
//import pen from '../img/pen.png'
import ShowNote from './showNote';

 const Notes = () => {


    const [datos,setDatos] = useState({
      title: '',
      note: ''
    })
     const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
          ...datos,
          [event.target.name] : event.target.value
        })
     }
 
     const AddingNotes = async(e) =>{
      e.preventDefault();
      const docRef = await addDoc(collection(db, "notes"), {
        title: datos.title,
        note: datos.note
      });
      console.log({docRef})
      console.log("Document written with ID: ", docRef.id );
  
    }
   
      
    return (
      
      <div className='div-notes'>
          <Link to = '/'>
          <button className= 'out-button'>SALIR</button>
        </Link>
      <header>
        <h1 className='div-title'>MY NOTES</h1>
       <img src={oldpen} alt='oldpen' className='oldPen'/>
        </header>
        <Fragment>
      <form className='newNote' onSubmit={AddingNotes}> 
          
          <input className='input-note-title' placeholder='Título de la nota' type= 'text' name='title' onChange={handleInputChange}></input>      
          <textarea placeholder='Escribe aquí tu nota' type= 'text' name='note' onChange={handleInputChange}></textarea>
          <button className='submitButton' type= 'submit' >Save Note</button>
      </form>
      </Fragment>
      <ShowNote />
      </div>
    
   
    );
  }


export default Notes;