import React, { useEffect, useState } from "react";
import helpify from "../images/helpify.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import manLogin from "../images/manLogin.png";
import "../Login.css"; // Import CSS file
export const Register = () => {

  useEffect(() => {
    document.title = "Register";
  }, []);


  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    mobileNo: "",
    gender: "",
  });

  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await fetch(
      "https://helpifybackend-production.up.railway.app/api/users/register",
      {
        body: JSON.stringify(formData),
        method: `POST`,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    if (!response.ok) {
      console.log("Error");
    }
    if (response.ok) {
      navigate("/login");
    }
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  return (
    <>
      <title>Registration Form</title>
      <link rel="stylesheet" href="../css/styles.css" />
      <link rel="stylesheet" href="styles.css" />
      <div className="minor4">
        <div className="image1">
          <img src={manLogin} alt="" />
        </div>
        <div className="container2">
          <h2 className="headingup">Registration Form</h2>
          <form
            onSubmit={handleSubmit}
            className="formh"
            action="/registration"
            method="post"
            role="form"
          >
            <div className="form-group">
              <label htmlFor="fullname">Fullname:</label>
              <input
                onChange={handleChange}
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your fullname"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Gender</label>
              <input
                onChange={handleChange}
                type="text"
                id="gender"
                name="gender"
                placeholder="Enter your gender"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Mobile Number</label>
              <input
                onChange={handleChange}
                type="text"
                id="mobileNo"
                name="mobileNo"
                placeholder="Enter your MobileNo"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required=""
              />
            </div>
            <button type="submit" className="submitbutton">
              Register
            </button>
            <p className="textt">
              Already have an account?{" "}
              <a className="linkkk">
                <Link to="/login">LOGIN HERE</Link>
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
