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
  
  const handleLogin = (e) => {
    e.preventDefault();

    //Pramit: later Change this with Backend login
    if (email === "Aadit@gmail.com" && password === "12345") {
      setIsLoading(true); //loader 
      setTimeout(() => {
        navigate("/Dashboard"); // Navigate to the dashboard
        setIsLoading(false); // Hide the loading screen
      }, 3000); // Wait a 3-second delay
    } 
    else {
      toast("Invalid email or password!");   //alert when password or email is wrong 
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex-row">
            <div>
              <input type="radio" />
              <label>Remember me </label>
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



