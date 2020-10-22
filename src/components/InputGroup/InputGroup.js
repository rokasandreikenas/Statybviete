import React from "react";
import Input from "../Input";

import "./InputGroup.scss";
const InputGroup = ({ label, type, value, onChange, name, symbol }) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <Input type={type} value={value} onChange={onChange} name={name} />
      {symbol && <span>{symbol}</span>}
    </div>
  );
};

export default InputGroup;
