import React from 'react';
import './LoadingScreen.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <h1 className="phantom-logo">PHANTOM</h1>
        <div className="logo-underline"></div>
        <p className="tagline">Born from Shadows</p>
      </div>
    </div>
  );
}

export default LoadingScreen;