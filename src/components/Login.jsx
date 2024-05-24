import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login.css";
import manLogin from "../images/manLogin.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://helpifybackend-production.up.railway.app/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        setError("Failed to log in");
        return;
      }

      const responseData = await response.json();
      localStorage.setItem("userData", JSON.stringify(responseData)); // Store user data in localStorage
      navigate("/profile");
    } catch (error) {
      setError("An error occurred");
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  return (
    <>
      <title>Login Form</title>
      <div className="minor4">
        <div className="image1">
          <img src={manLogin} alt="" />
        </div>
        <div className="container2">
          <h2 className="headingup">Admin and User Login Page</h2>
          <form className="formh" onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <input type="submit" value="Login" />
            <p className="textt">
              Don't have an account? <Link to="/register">SignUp</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
