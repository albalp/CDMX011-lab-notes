import React, { useState } from 'react';
import { Link } from 'react-router-dom';


 const  Modal = () => {

    const [show, setShow] = useState(false);
   
  const handleModalClose = (e) => {
    const currentClass = e.target.className;
    
    if (currentClass === 'modal-card') {
      return;
    }
    
    setShow(false);
  };
  
  const handleModalOpen = () => {
    setShow(true);
  };
    return (
      <div>
        <nav>
          <Link to = '/'>
        <button className= 'out-button'>SALIR</button>
        </Link>
        </nav>
        <div className ='div-title'>
        <button className="button" onClick={handleModalOpen}>+ NEW NOTE</button>
        </div>

        <div className="App">
          <div hidden={!show}>
            <div className="modal-background" onClick={handleModalClose}>
               <div className="modal-card"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Modal;