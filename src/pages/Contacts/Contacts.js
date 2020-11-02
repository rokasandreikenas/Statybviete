import React from "react";
import ContentTitle from "../../components/ContentTitle";
import ContactsContainer from "../../components/ContactsContainer";

import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contacts-page">
      <ContentTitle>Kontaktai</ContentTitle>

      <div className="container">
        <ContactsContainer />
      </div>
    </section>
  );
};

export default Contacts;
