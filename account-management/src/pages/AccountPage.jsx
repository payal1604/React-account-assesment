import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirecting

const AccountPage = ({ user, setUser }) => {
  const [email, setEmail] = useState(user.email);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Set the initial email from user prop when the component is mounted
    setEmail(user.email);
  }, [user]);

  const handleSave = () => {
    // Keep the existing password and update only the email
    const updatedUser = { email, password: user.password };
    localStorage.setItem("user", JSON.stringify(updatedUser)); // Update localStorage
    setUser(updatedUser); // Update user state in the app
    setEditing(false); // Exit editing mode
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user");
    setUser(null); // Reset the user state to null
    navigate("/login"); // Redirect to the login page
  };

  return (
    <div className="container">
      <h2 className="mt-5">Account Information</h2>
      <div className="form-group">
        <label>Email</label>
        {editing ? (
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <p>{email}</p>
        )}
      </div>
      {editing ? (
        <button className="btn btn-success mt-3" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="btn btn-warning mt-3 ms-2" onClick={() => setEditing(true)}>
          Edit
        </button>
      )}

      {/* Logout Button */}
      <button
        className="btn btn-danger mt-3 ms-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default AccountPage;
