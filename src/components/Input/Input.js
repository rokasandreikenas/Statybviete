import React from "react";

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

export default Input;
