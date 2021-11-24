import React from 'react';
import { Link } from 'react-router-dom';
import { AddingNotes, ViewNotes } from '../firebase/create-collection';
 const Notes = () => {
  
    // const prueba = (e) =>{
    //  e.preventDefault();
    //  console.log('Working') 
    //  }   

    return (
      <div className='div-notes'>
          <Link to = '/'>
          <button className= 'out-button'>SALIR</button>
        </Link>
      <header>
        <h1 className='div-title'>MY NOTES</h1>
        </header>
    
      <form className='newNote'> 
          <input className='input-note-title' placeholder='Título de la nota'></input>      
          <textarea placeholder='Escribe aquí tu nota'></textarea>
          <button className='submitButton' type= 'submit' onClick={AddingNotes}>Save Note</button>
      </form>
      </div>
    );
  }


export default Notes;