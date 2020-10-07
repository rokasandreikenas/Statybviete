import React from "react";

import "./Input.scss";
const Input = ({ type, value, onChange, name, ...props }) => {
  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      {...props}
    />
  );
};

export default Input;
