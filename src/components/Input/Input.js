import React from "react";
import PropTypes from "prop-types";

import "./Input.scss";
const Input = ({ type, value, onChange, name, ...rest }) => {
  return (
    <input
      className="input"
      {...rest}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Input;
