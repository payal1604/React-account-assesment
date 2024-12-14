import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage when the app starts
    const storedUser = localStorage.getItem("user");
    const parsedUser = storedUser ? JSON.parse(storedUser) : null;
    if (parsedUser) {
      setUser(parsedUser);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/account"
            element={
              user ? (
                <AccountPage user={user} setUser={setUser} />
              ) : (
                <div className="container">Please login first.</div>
              )
            }
          />
          <Route
            path="/"
            element={
              <div className="container mt-5">
                <h1>Welcome to the Account Management App</h1>
                <p>
                  <a href="/login">Login</a> | <a href="/register">Register</a>
                </p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
