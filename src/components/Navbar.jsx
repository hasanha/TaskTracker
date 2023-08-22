import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.user !== "");

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleLogout = () => {
    localStorage.removeItem("users");
    window.location.reload();
    return <Navigate to="/login" />;
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" onClick={toggleLinks}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${showLinks ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mt-2 mx-2 ">
              {!isLoggedIn ? (
                <Link className="nav__login p-2" to="/login">
                  Login
                </Link>
              ) : (
                <Button variant="primary" type="submit" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </li>
            <li className="nav-item">
              <Link to="/alltasks" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addtask">
                Add Task
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alltasks">
                All Tasks
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
