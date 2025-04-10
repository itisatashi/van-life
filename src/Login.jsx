import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "./api";

export default function Login() {
  const [loginFormData, setLoginFormData] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        setError(null);
        navigate("/host");
      })
      .catch((error) => setError(error))
      .finally(() => {
        setStatus("idle");
      });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  return (
    <section className="login-container">
      {location.state?.message && <h3>You must first log in</h3>}
      <h1>Sign in to your account</h1>
      {error?.message && <h3>{error.message}</h3>}

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
        <button className="link-button" disabled={status === "submitting"}>
          {status === "submitting" ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p>Don’t have an account? Create one now</p>
    </section>
  );
}
