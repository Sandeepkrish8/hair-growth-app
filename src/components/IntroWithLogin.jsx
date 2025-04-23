import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './IntroWithLogin.css';

const IntroWithLogin = ({ onLogin }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="intro-container">
      <div className="background-overlay">
        {!showLogin ? (
          <div className="intro-section">
            <h1>🌿 Welcome to <span className="brand-highlight">HairGrowth+</span></h1>
            <p className="intro-text">
              Your personal hair care companion. Get expert food, vitamin, and product suggestions to support healthy hair growth.
              Upload your hair images to receive real-time condition analysis and tailored advice.
            </p>

            <div className="intro-images">
              <img src="/images/haircare.png" alt="Hair Care" />
              <img src="/images/healthy-hair.png" alt="Healthy Hair" />
            </div>

            <h2>👨‍⚕️ Expert Endorsements</h2>
            <div className="doctors-section scrollable">
              <div className="doctor-card">
                <img src="/images/doctor1.jpg" alt="Dr. Meera Singh" />
                <h4>Dr. Meera Singh</h4>
                <p>"HairGrowth+ is a game-changer in personalized hair wellness. I recommend it to my clients."</p>
              </div>
              <div className="doctor-card">
                <img src="/images/doctor2.jpg" alt="Dr. Rohan Patel" />
                <h4>Dr. Rohan Patel</h4>
                <p>"Combining technology with nutrition advice is the future – and this app does it beautifully."</p>
              </div>
              <div className="doctor-card">
                <img src="/images/doctor3.jpg" alt="Dr. Priya Rao" />
                <h4>Dr. Priya Rao</h4>
                <p>"A personalized approach is key for hair care. HairGrowth+ nails it!"</p>
              </div>
              <div className="doctor-card">
                <img src="/images/doctor4.jpg" alt="Dr. Vikram Singh" />
                <h4>Dr. Vikram Singh</h4>
                <p>"HairGrowth+ is a reliable app that I confidently recommend for my patients."</p>
              </div>
            </div>

            <button className="signup-btn" onClick={() => setShowLogin(true)}>
              Sign Up / Log In
            </button>
          </div>
        ) : (
          <LoginForm onLogin={onLogin} />
        )}
      </div>
    </div>
  );
};

export default IntroWithLogin;
