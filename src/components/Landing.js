// src/components/Landing.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="screen landing-screen">
      <h1>Welcome to PopX</h1>
      <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button className="btn btn-primary" onClick={() => navigate('/register')}>
        Create Account
      </button>
      <button className="btn btn-secondary" onClick={() => navigate('/login')}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Landing;