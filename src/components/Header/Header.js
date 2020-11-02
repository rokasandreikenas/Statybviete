import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import Phone from "../../assets/icons/phone.svg";
import Mail from "../../assets/icons/mail.svg";
import { MAIL, PHONE } from "../../static/ContactInfo";

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
            <a href={`tel:${PHONE}`}>{PHONE}</a>
          </div>
          <div>
            <img src={Mail} alt="mail" />
            <a href={`mailto:${MAIL}`}>{MAIL}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
