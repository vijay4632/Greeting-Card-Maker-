import React, { useState } from "react";
import "./Form.css";

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Call parent handler or add your logic here
    if (onLogin) onLogin(form);
    alert("Successfully Logged in");
  };

  return (
    <section className="Form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div>
          <label htmlFor="login-email">Email</label>
          <input
            type="email"
            id="login-email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>
        <button className="submit-btn" type="submit">Login</button>
      </form>
    </section>
  );
};

export default Login;