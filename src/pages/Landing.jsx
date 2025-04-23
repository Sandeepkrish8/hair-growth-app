import React, { useState } from 'react';
import FoodList from '../components/FoodList';
import VitaminList from '../components/VitaminList';
import ImageUpload from '../components/ImageUpload';
import Dashboard from './Dashboard';
import HaircareProducts from './HaircareProducts';
import './Landing.css';

const Landing = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`landing-container ${darkMode ? 'dark' : ''}`}>
      <div className="hero-banner">
        <h1>🌿 Hair Growth Nutrition Guide</h1>
        <p>Your personalized guide to strong, healthy hair</p>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <div className="card-grid">
        <div className="card animated-card">
          <h2>🍎 Nutrient-Rich Foods</h2>
          <FoodList />
        </div>

        <div className="card animated-card">
          <h2>💊 Essential Vitamins</h2>
          <VitaminList />
        </div>

        <div className="card animated-card">
          <h2>📷 Hair Condition Detector</h2>
          <ImageUpload />
        </div>

        <div className="card animated-card">
          <h2>📊 Dashboard</h2>
          <Dashboard />
          
        </div>

        <div className="card animated-card">
          <h2>🛍️ Haircare Products</h2>
          <HaircareProducts />
        </div>

        
      </div>
    </div>
  );
};

export default Landing;
