import React, { useState, useEffect } from 'react';

const AccountPage = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    // Get user data from localStorage when the component mounts
    const storedUser = localStorage.getItem('user');
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    if (parsedUser) {
      setEmail(parsedUser.email);
    }
  }, []);

  const handleSave = () => {
    // Update the user data in localStorage
    const updatedUser = { email };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
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
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      ) : (
        <button className="btn btn-warning" onClick={() => setEditing(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default AccountPage;
