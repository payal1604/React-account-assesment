import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Correct import for React Router v6

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Use useNavigate in place of useHistory

  const handleLogin = () => {
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;

    if (parsedUser && parsedUser.email === email && parsedUser.password === password) {
      setUser(parsedUser);
      navigate('/account');  // Correct way to navigate with useNavigate
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-5">Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
      <p className="mt-3">
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default LoginPage;
