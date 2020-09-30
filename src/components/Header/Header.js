import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <header className="container">
      <div className="header-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
