import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  console.log(location);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <section className="login-container">
      {location.state?.message && <h3>You must first log in</h3>}
      <h1>Sign in to your account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email address"
          onChange={handleChange}
          value={loginFormData.email}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={loginFormData.password}
        />
        <button className="link-button">Sign in</button>
      </form>
      <p>Don’t have an account? Create one now</p>
    </section>
  );
}
