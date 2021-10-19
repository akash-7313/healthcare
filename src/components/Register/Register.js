import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const Register = () => {
  const { handleUserRegistration, error, signInWithGoogle, updateUserProfile } =
    useAuth();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserName = (e) => {
    // console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleRegister = () => {
    handleUserRegistration(email, password);
    updateUserProfile(userName);
  };

  return (
    <div className="py-5 d-flex justify-content-center align-items-center">
      <div className="py-5 text-center">
        <h4 className="mb-3 text-primary">Please Register</h4>
        <div className="row mb-3">{error}</div>
        <div>
          <input
            onBlur={handleUserName}
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
          <br />
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
          <button onClick={handleRegister} className="btn btn-primary my-3">
            Register
          </button>
        </div>
        <span>
          Already have an account? <NavLink to="/login">Login</NavLink>
        </span>
        <div>------or-------</div>
        <button onClick={signInWithGoogle} className="btn btn-secondary">
          Google Sign-In
        </button>
      </div>
    </div>
  );
};

export default Register;
