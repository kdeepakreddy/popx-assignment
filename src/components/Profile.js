// src/components/Profile.js
import React from 'react';

function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile-header">
        Account Settings
      </div>
      <div className="profile-content">
        <div className="user-info">
          <div className="avatar">
            <div className="camera-icon">📷</div>
          </div>
          <div className="user-details">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="profile-desc">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}

export default Profile;