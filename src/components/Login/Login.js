import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Login = () => {
  const { handleUserLogin, signInWithGoogle } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="py-5 d-flex justify-content-center align-items-center">
      <div className="py-5 text-center">
        <h4 className="mb-3 text-primary">Please Login</h4>
        <div>
          <input
            onBlur={handleEmail}
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            onBlur={handlePassword}
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
          <button onClick={handleLogin} className="btn btn-primary my-3">
            Login
          </button>
        </div>
        <span>
          New user? <NavLink to="/register">Register</NavLink>
        </span>
        <div>------or-------</div>
        <button onClick={signInWithGoogle} className="btn btn-secondary">
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default Login;
