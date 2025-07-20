import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Register from "./components/Register";
import Login from "./components/Login";

const App = () => {
  const [page, setPage] = useState("home");

  // Greeting card state
  const [Recipient, setRecipient] = useState("");
  const [Occasion, setOccasion] = useState("");
  const [Message, setMessage] = useState("");
  const [Sender, setSender] = useState("");
  const Values = { Recipient, Occasion, Message, Sender };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case "Recipient": setRecipient(value); break;
      case "Occasion": setOccasion(value); break;
      case "Message": setMessage(value); break;
      case "Sender": setSender(value); break;
      default: break;
    }
  };

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