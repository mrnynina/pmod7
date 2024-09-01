import React from 'react';
import { useSelector } from 'react-redux';
import mod7 from '../assets/mod7.png'
import '../App.css';

const Dashboard = () => {
  const { username, email } = useSelector(state => state.auth);

  return (
    <div>
      <nav className="estilonav">
        <p>Bienvenido, {username}!</p>
        <p>Email: {email}</p>
      </nav>
      <img src={mod7} />
    </div>
  );
};

export default Dashboard;

