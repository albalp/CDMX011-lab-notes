import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc } from "firebase/firestore";
import db from '../firebase/firebase-init'
import oldpen from '../img/oldpen.png';
import exit from '../img/exit.png'
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
      
      <div >
          <Link to = '/'>
          <div className='divExit'>
          <img className= 'exit' src={exit} alt='exit'></img>
          </div>
        </Link>
      <header className='div-notes'>
        <h1 className='div-title'>MY NOTES</h1>
       <img src={oldpen} alt='oldpen' className='oldPen'/>
        </header>
        <Fragment>
        <div className='div-notes'>
      <form className='newNote' onSubmit={AddingNotes}> 
          
          <input className='input-note-title' placeholder='Título de la nota' type= 'text' name='title' onChange={handleInputChange}></input>      
          <textarea placeholder='Escribe aquí tu nota' type= 'text' name='note' onChange={handleInputChange}></textarea>
          <button className='submitButton' type= 'submit' >Save Note</button>
      </form>
      
      <ShowNote />
      </div>
      </Fragment>
      </div>
    
   
    );
  }


export default Notes;