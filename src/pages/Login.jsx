import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Form.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (account) => {
    account.preventDefault();
    // Simple authentication logic
    if (username === 'marcus' && password === 'qwe123') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <div id="login-form">
      <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input 
          type="text" 
          id="username" 
          name="username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          />
          <label htmlFor="password">Password:</label>
          <input 
          type="password" 
          id="password" 
          name="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
          <input type="submit" value="Submit" />
          <p>Dont have an account? <Link to="/signup">Sign up here</Link></p>
        </form>
      </div>
    </div>
  );

};

export default Login;
