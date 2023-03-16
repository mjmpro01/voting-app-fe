import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import authService from "../services/authService";
function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const user = localStorage.getItem("user");
  const jsonUser = JSON.parse(user);

  useEffect(() => {
    // do nothing
  }, []);
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col">
          <h2>Welcome to Dashboard</h2>
        </div>
        <div class="col-md-auto"></div>
        <div class="col col-lg-2">
          <div class="row flex justify-content-between">
            <div class= "col mt-3"><h6>Hi, {jsonUser.username}</h6></div>
            <div class="col">
              {user ? (
               <Button type="button" onClick={() => handleLogout()}>
               Logout
             </Button>
           ) : (
             <Button type="button" onClick={() => handleLogin()}>
               Login
             </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
