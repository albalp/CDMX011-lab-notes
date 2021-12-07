import React from 'react';
import { Link } from 'react-router-dom';
import loginWithGoogle from '../firebase/auth';
import google from '../img/google.png'


 const Login = () =>  {

  
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
        <p onClick={loginWithGoogle}>Continúa con Google
        <img src={google} alt='GoogleIcon' className='googleIcon'></img>
        </p>
        </Link>
      </div>
      </div>
      
    );
  
}
export default Login;