// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const EyeIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {showPassword ? (
        <>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </>
      ) : (
        <>
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
          <line x1="1" y1="1" x2="23" y2="23"></line>
        </>
      )}
    </svg>
  );

  return (
    <div className="screen auth-screen">
      <h1>Signin to your<br />PopX account</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <div className="form-container">
        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type={showPassword ? "text" : "password"} 
            placeholder="Enter password" 
            className="password-input"
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon />
          </span>
        </div>
      </div>

      <button className="btn btn-disabled mt-auto" onClick={() => navigate('/profile')}>
        Login
      </button>
    </div>
  );
}

export default Login;