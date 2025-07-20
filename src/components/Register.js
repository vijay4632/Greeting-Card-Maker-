import React, { useState } from "react";
import "./Form.css";

const Register = ({ onRegister }) => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Call parent handler or add your logic here
    if (onRegister) onRegister(form);
    alert("Successfully Registered");
  };

  return (
    <section className="Form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="reg-name">Name</label>
          <input
            type="text"
            id="reg-name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="reg-email">Email</label>
          <input
            type="email"
            id="reg-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="reg-password">Password</label>
          <input
            type="password"
            id="reg-password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Create a password"
          />
        </div>
        <button className="submit-btn" type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;