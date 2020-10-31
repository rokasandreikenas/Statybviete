import React from "react";
import ContentTitle from "../../components/ContentTitle";
import Phone from "../../assets/icons/phone.svg";
import Location from "../../assets/icons/location.svg";
import Calendar from "../../assets/icons/calendar.svg";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts-page">
      <ContentTitle>Kontaktai</ContentTitle>
      <div className="container">
        <div className="contact-container">
          <div className="info">
            <div className="info-block">
              <div className="header">
                <img src={Location} alt="location" />
                <h3>Adresas</h3>
              </div>
              <p>Bajorų kel. 27-20, LT-08467 Vilnius</p>
            </div>
            <div className="info-block">
              <div className="header">
                <img src={Phone} alt="phone" />
                <h3>Kontaktai</h3>
              </div>
              <div className="contacts">
                <a href="tel:+37067133876">+370 671 876</a>
                <a href="mailto:andreikenas.rokas@gmail.com">
                  andreikenas.rokas@gmail.com
                </a>
              </div>
            </div>
            <div className="info-block">
              <div className="header">
                <img src={Calendar} alt="calendar" />
                <h3>Darbo valandos</h3>{" "}
              </div>

              <p>Pirmadienis - Penktadienis: 8:00 - 17:00</p>
              <p>Šeštadienis: 10:00 - 14:00</p>
              <p>Sekmadienis: nedirbame</p>
            </div>
          </div>
          <div className="map">
            <iframe
              title="Vilnius"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9224.74369746977!2d25.261708437779657!3d54.688755787475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd940f28c9f5ef%3A0x436260edb229adee!2sCenter%2C%20Vilnius%2001107!5e0!3m2!1sen!2slt!4v1604128745845!5m2!1sen!2slt"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
