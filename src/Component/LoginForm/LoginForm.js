import React, { useState } from "react";
import "./LoginForm.css";
import { FaAt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Loader/Loader";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    //for Email
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    //for Password
    setPassword(e.target.value);
  };

  // Authentication logic (Pramit! use a backend API)
  const validateCredentials = (email, password) => {
    const validEmail = "aadit@gmail.com"; // Example email
    const validPassword = "12345"; // Example password
    return email === validEmail && password === validPassword;
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Validate form data
    if (validateCredentials(email, password)) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false); // Hide the loading screen
        navigate("/Dashboard"); // Navigate to the dashboard
      }, 3000); // Wait 3-second delay
    } else {
      toast("Invalid email or password!"); //Show error message when password or email is wrong
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <form className="form" onSubmit={handleLogin}>
          <div className="flex-column">
            <label>Email :</label>
          </div>
          <div className="inputForm">
            <FaAt />
            <input
              placeholder="Enter your Email"
              className="input"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className="flex-column">
            <label>Password :</label>
          </div>
          <div className="inputForm">
            <FaLock />
            <input
              placeholder="Enter your Password"
              className="input"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="flex-row">
            <div>
              <input type="radio" />
              <label>Remember me</label>
            </div>
            <span className="span">Forgot password ?</span>
          </div>
          <button className="button-submit" type="submit">
            Login
          </button>
          <ToastContainer />
        </form>
      )}
    </>
  );
}
