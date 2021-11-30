import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
//import { AddingNotes } from '../firebase/create-collection';

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
     const sendNote = (event) => {
       event.preventDefault();
       console.log(datos.title + ' Success!' + datos.note);
     }
   
      
    return (
      
      <div className='div-notes'>
          <Link to = '/'>
          <button className= 'out-button'>SALIR</button>
        </Link>
      <header>
        <h1 className='div-title'>MY NOTES</h1>
        </header>
        <Fragment>
      <form className='newNote' onSubmit={sendNote}> 
          
          <input className='input-note-title' placeholder='Título de la nota' type= 'text' name='title' onChange={handleInputChange}></input>      
          <textarea placeholder='Escribe aquí tu nota' type= 'text' name='note' onChange={handleInputChange}></textarea>
          <button className='submitButton' type= 'submit' >Save Note</button>
      </form>
      </Fragment>
      </div>
   
    );
  }


export default Notes;