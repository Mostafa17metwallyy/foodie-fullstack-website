// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ setLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await response.json();

    if (data.success) {
      setLoggedIn(true);
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        {message && <p className="login-error-message">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
