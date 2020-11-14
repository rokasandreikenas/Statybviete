import React from "react";
import PropTypes from "prop-types";
import Input from "../Input";

import "./InputGroup.scss";
const InputGroup = ({
  label,
  type,
  value,
  onChange,
  name,
  symbol,
  ...rest
}) => {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <Input
        {...rest}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      {symbol && <span>{symbol}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  symbol: PropTypes.string,
};

export default InputGroup;
