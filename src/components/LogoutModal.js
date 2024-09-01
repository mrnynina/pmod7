import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/authActions';
import '../App.css';

const LogoutModal = ({ showModal, setShowModal }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className='estilomodal1'
    

    
    >
      <p>¿Estás seguro que quieres cerrar sesión?</p>
      <button onClick={handleLogout}>Presionar para salir</button>
      <button onClick={() => setShowModal(false)}>X</button>
    </div>
  );
};

export default LogoutModal;
