import React from "react";
import PropTypes from "prop-types";

import "./ContentTitle.scss";

const ContentTitle = ({ children }) => {
  return (
    <header className="content-title">
      <div className="container">
        <p>{children}</p>
      </div>
    </header>
  );
};

ContentTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ContentTitle;
