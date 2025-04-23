import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Landing from './pages/Landing';
import HaircareProducts from './pages/HaircareProducts';
import './styles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    // Simulate login logic
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      alert("Login failed, try again.");
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Landing /> : <LoginForm onLogin={handleLogin} />}
          />
          <Route path="/landing" element={<Landing />} />
          {/* Add more routes as needed */}
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          
          {/* Add more routes for other components/pages */}
          <Route path="/products" element={<HaircareProducts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
