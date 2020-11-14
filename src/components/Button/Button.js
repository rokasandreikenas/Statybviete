import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Button;
