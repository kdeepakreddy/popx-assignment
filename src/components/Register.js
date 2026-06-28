// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
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
      <h1>Create your<br />PopX account</h1>
      
      <div className="form-container">
        <div className="input-group">
          <label>Full Name<span className="required">*</span></label>
          <input type="text" defaultValue="Marry Doe" />
        </div>
        <div className="input-group">
          <label>Phone number<span className="required">*</span></label>
          <input type="tel" defaultValue="Marry Doe" />
        </div>
        <div className="input-group">
          <label>Email address<span className="required">*</span></label>
          <input type="email" defaultValue="Marry Doe" />
        </div>
        <div className="input-group">
          <label>Password <span className="required">*</span></label>
          <input 
            type={showPassword ? "text" : "password"} 
            defaultValue="Marry Doe" 
            className="password-input"
          />
          <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
            <EyeIcon />
          </span>
        </div>
        <div className="input-group">
          <label>Company name</label>
          <input type="text" defaultValue="Marry Doe" />
        </div>

        <div className="radio-group-container">
          <p className="radio-title">Are you an Agency?<span className="required">*</span></p>
          <div className="radio-group">
            <label>
              <input type="radio" name="agency" value="yes" defaultChecked /> Yes
            </label>
            <label>
              <input type="radio" name="agency" value="no" /> No
            </label>
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-auto" onClick={() => navigate('/profile')}>
        Create Account
      </button>
    </div>
  );
}

export default Register;