import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// super basic login page (not secure at all but it's just for demo)
export function Login() {
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  // handling the login - literally just checking if password is "admin" lol
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // yeah this is not secure but whatever, it's just a demo
    if (password === 'admin') {
      login();
      navigate('/admin');
    } else {
      alert('wrong password bestie, try again');
    }
  };

  return (
    <div className="page">
      <div className="login-container">
        <h1>admin login</h1>
        <p>psst... the password is "admin" but don't tell anyone</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter password"
              required
            />
          </div>
          
          <button type="submit" className="submit-button">
            log in
          </button>
        </form>
      </div>
    </div>
  );
}
