// src/components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (!email || !password) {
        setErrorMessage('Please enter both email and password.');
        setLoading(false);
        return;
      }

      await onLogin(email, password);
      setSuccessMessage('Login successful!');
    } catch (err) {
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login to Your Account</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>

        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}

        <Link to="/forgot-password" className="forget-password">Forgot Password?</Link>
        <Link to="/sign-up" className="signup-link">Don't have an account? Sign up</Link>
      </form>
    </div>
  );
};

export default LoginForm;
