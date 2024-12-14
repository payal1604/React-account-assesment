import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    // Check email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Save user to localStorage
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user)); // Save user data in localStorage
    setError("");
    navigate("/login"); // Navigate to login after successful registration
  };

  return (
    <div className="container">
      <h2 className="mt-5">Register</h2>
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
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary mt-2" onClick={handleRegister}>
        Register
      </button>
    </div>
  );
};

export default RegisterPage;
