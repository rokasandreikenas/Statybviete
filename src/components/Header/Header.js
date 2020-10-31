import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";

import "./Header.scss";
const Header = () => {
  return (
    <header className="container">
      <div className="header-container">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header-center">
          <div>
            <img src={Phone} alt="phone" />
            <a href="tel:+37067133876">+370 671 876</a>
          </div>
          <div>
            <img src={Mail} alt="mail" />
            <a href="mailto:andreikenas.rokas@gmail.com">
              andreikenas.rokas@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
