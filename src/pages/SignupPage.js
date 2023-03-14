import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) {
        setError("Password and confirm password do not match");
        return;
      }
      const response = await authService.signup(username, password);
      if (response.data.success) {
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase text-center">Signup</h2>
                  <p> </p>

                  <form onSubmit={handleSignup}>
                    <div className="form-outline form-white mb-4 ">
                    <label className="form-label" htmlFor="typeEmailX">
                        Username
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={username}
                        onChange={handleUsernameChange}
                      />
                      
                    </div>

                    <div className="form-outline form-white mb-4 ">
                    <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={handleEmailChange}
                        required={email}
                      />
                      
                    </div>

                    <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      
                    </div>

                    <div className="form-outline form-white mb-4">
                    <label className="form-label" htmlFor="typePasswordX">
                        Confirm password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={handleConfirmPasswordChange}
                      />
                      
                    </div>
                    <p className="small mb-5 pb-lg-2 text-center">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <div className="d-flex justify-content-center">
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                    </div>
                    
                  </form>

                </div>

                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" className="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
