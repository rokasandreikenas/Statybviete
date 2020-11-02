import React from "react";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/location.svg";
import Calendar from "../../assets/icons/calendar.svg";
import {
  MAIL,
  PHONE,
  ADDRESS,
  WEEK_DAYS,
  SATURDAY,
  SUNDAY,
  MAP_SOURCE,
  PHONE_WITH_SPACES,
} from "../../static/ContactInfo";
import "./ContactsContainer.scss";
const ContactsContainer = () => {
  return (
    <div className="contact-container">
      <div className="info">
        <div className="info-block">
          <div className="header">
            <img src={Location} alt="location" />
            <h3>Adresas</h3>
          </div>
          <p>{ADDRESS}</p>
        </div>
        <div className="info-block">
          <div className="header">
            <img src={Phone} alt="phone" />
            <h3>Kontaktai</h3>
          </div>
          <div className="contacts">
            <a href={`tel:${PHONE}`}>{PHONE_WITH_SPACES}</a>
            <a href={`tel:${MAIL}`}>{MAIL}</a>
          </div>
        </div>
        <div className="info-block">
          <div className="header">
            <img src={Calendar} alt="calendar" />
            <h3>Darbo valandos</h3>
          </div>

          <p>Pirmadienis - Penktadienis: {WEEK_DAYS}</p>
          <p>Šeštadienis: {SATURDAY}</p>
          <p>Sekmadienis: {SUNDAY}</p>
        </div>
      </div>
      <div className="map">
        <iframe title="Vilnius" src={MAP_SOURCE}></iframe>
      </div>
    </div>
  );
};

export default ContactsContainer;
