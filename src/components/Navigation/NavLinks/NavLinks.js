import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.scss";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          APIE MUS
        </NavLink>
      </li>
      <li>
        <NavLink to="/skaiciuokle">SKAIČIUOKLĖ</NavLink>
      </li>
      <li>
        <NavLink to="/kontaktai">KONTAKTAI</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
