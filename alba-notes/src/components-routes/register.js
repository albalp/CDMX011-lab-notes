import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 class Register extends Component {
  render() {
    return (
      <div>
      <div className ='div-title'>
        <h1>REGISTRO</h1>
        <Link to = '/'>
        <button>REGISTER</button>
        </Link>
      </div>
      <div>
      <Link to = '/'>
        <p>¿Ya tienes cuenta? Inicia Sesión</p>
        </Link>
      </div>
      </div>

    );
  }
}
export default Register;