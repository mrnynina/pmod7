import React from 'react';

const PasswordErrorModal = ({ closeModal }) => {
  return (
    <div style={{ 
      background: 'rgb(176, 236, 239)',
      height: '15vh', 
      fontFamily: 'Sans Serif',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '10px'
    }}>
      <p style={{display:'inline-block'}}>Password Incorrecto</p>
      <button onClick={closeModal}>X</button>
    </div>
  );
};

export default PasswordErrorModal;
