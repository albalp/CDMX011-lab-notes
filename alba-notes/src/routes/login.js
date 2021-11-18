import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      
      <div className ='sectionMain'>
      <div className ='div-title'>
        <h1>NOTE MY NOTES</h1>
        <Link to="/allNotes">
        <button>LOGIN</button>
        </Link>
        <Link to = '/register'>
        <p>¿No tienes cuenta? ¡Regístrate!</p>
        </Link>
        <Link to = '/allNotes'>
        <p>Continúa con Google</p>
        </Link>
      </div>
      </div>
      
    );
  }
}
export default Login;