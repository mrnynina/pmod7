import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import LogoutModal from './LogoutModal';
import PasswordErrorModal from './PasswordErrorModal';
import ojito from '../assets/ojito.png'
import Dashboard from './Dashboard';
import '../App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const correctPassword = 'mod7reactusip';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      dispatch(login({ username, email, password }));
    } else {
      setShowErrorModal(true);
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  return (
    <div>
            <h2>AUTENTIFICACION</h2>
      { 
      !isAuthenticated ?
       (
        <form className="estiloform" onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label>Password: </label>
            <input 
              type={showPassword ? "text" : "password"} 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <img 
              src={ojito}
              alt="Toggle Password Visibility" 
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
            />
          </div>


          <button type="submit">Submit</button>

          <a href="#" onClick={handleLogout}>Logout</a>

        </form>
      ) : (
        
        
        <div>
          <Dashboard />
        </div>
      )}
          <LogoutModal 
        showModal={showLogoutModal} 
        setShowModal={setShowLogoutModal} 
      />
      {showErrorModal && (
        <PasswordErrorModal closeModal={() => setShowErrorModal(false)} />
      )}


    </div>
  );
};

export default LoginForm;
