import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 class allNotes extends Component {
  render() {
    return (
      <div>
      <div className ='div-title'>
        <h1>TODAS LAS NOTAS</h1>
        <Link to = '/'>
        <button>SALIR</button>
        </Link>
      </div>
      </div>
    );
  }
}
export default allNotes;