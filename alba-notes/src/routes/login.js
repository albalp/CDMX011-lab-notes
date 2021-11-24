import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { loginGoogle } from '../firebase/auth';
class Login extends Component {
  render() {
    return (
      
      <div className ='sectionMain'>
      <div className ='div-title'>
        <h1>NOTE MY NOTES</h1>
        <Link to="/notes">
        <button>LOGIN</button>
        </Link>
        <Link to = '/register'>
        <p>¿No tienes cuenta? ¡Regístrate!</p>
        </Link>
        <Link to = '/notes'>
        <p to='/notes'>Continúa con Google</p>
        </Link>
      </div>
      </div>
      
    );
  }
}
export default Login;