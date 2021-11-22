import React, { Component } from 'react';
import db from '../firebase-init';
//import { collection, addDoc } from "firebase/firestore";
 class Notes extends Component {
  render() {
    const prueba = (e) =>{
      e.preventDefault();
      console.log(db);
    }
    return (
      <div>
      <header><h1 className='div-title'>NOTE MY NOTES</h1></header>
      <form className='newNote'>       
          <textarea placeholder='Escribe aquí tu nota'></textarea>
          <button className='submitButton' onClick={prueba}>Save Note</button>
      </form>
      </div>
    );
  }
}
export default Notes;