import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Preview from "./Preview";
import Navbar from "./Navbar";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";

const App = () => {
  const [Recipient, setRecipient] = useState("");
  const [Occasion, setOccasion] = useState("");
  const [Message, setMessage] = useState("");
  const [Sender, setSender] = useState("");
  const [page, setPage] = useState("login"); // Show login first
  const [authenticated, setAuthenticated] = useState(false); // Not logged in by default

  const Values = { Recipient, Occasion, Message, Sender };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "Recipient":
        setRecipient(value);
        break;
      case "Occasion":
        setOccasion(value);
        break;
      case "Message":
        setMessage(value);
        break;
      case "Sender":
        setSender(value);
        break;
      default:
        break;
    }
  };

  // Fake login/register handlers
  const handleLogin = () => {
    setAuthenticated(true);
    setPage("home");
  };
  const handleRegister = () => {
    setAuthenticated(true);
    setPage("home");
  };

  if (!authenticated) {
    // Show login or register only
    return (
      <div className="auth-bg">
        <div className="App">
          {page === "login" && <Login onLogin={handleLogin} />}
          {page === "register" && <Register onRegister={handleRegister} />}
          <div style={{ textAlign: "center", marginTop: 24 }}>
            {page === "login" ? (
              <span>
                Don't have an account?{" "}
                <button
                  style={{
                    color: "#e06c9f",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setPage("register")}
                >
                  Register
                </button>
              </span>
            ) : (
              <span>
                Already have an account?{" "}
                <button
                  style={{
                    color: "#e06c9f",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={() => setPage("login")}
                >
                  Login
                </button>
              </span>
            )}
          </div>
        </div>
        {/* SVG background */}
        <svg
          className="auth-bg-svg"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="1200"
            cy="120"
            rx="340"
            ry="120"
            fill="#e06c9f22"
          />
          <ellipse
            cx="300"
            cy="700"
            rx="400"
            ry="140"
            fill="#5f2c8222"
          />
          <ellipse
            cx="900"
            cy="500"
            rx="200"
            ry="80"
            fill="#ffe3ec44"
          />
        </svg>
      </div>
    );
  }

  // Main website after login/register
  return (
    <div className="App">
      <Navbar onNav={setPage} />
      {page === "home" && <Home onStart={() => setPage("maker")} />}
      {page === "register" && <Register />}
      {page === "login" && <Login />}
      {page === "maker" && (
        <>
          <Form Values={Values} onChange={handleChange} />
          <Preview Values={Values} />
        </>
      )}
    </div>
  );
};

export default App;
