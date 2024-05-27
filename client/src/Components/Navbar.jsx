import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=pop">
            <h6>POP</h6>
          </Link>
          <Link className="link" to="/?cat=rock">
            <h6>ROCK</h6>
          </Link>
          <Link className="link" to="/?cat=romantic">
            <h6>ROMANTIC</h6>
          </Link>
          <Link className="link" to="/?cat=indian">
            <h6>INDIAN</h6>
          </Link>
          <Link className="link" to="/?cat=kpop">
            <h6>K-POP</h6>
          </Link>
          <Link className="link" to="/?cat=artists">
            <h6>ARTISTS</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;