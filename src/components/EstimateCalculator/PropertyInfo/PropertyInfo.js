import React from "react";
import InputGroup from "../../InputGroup";

const PropertyInfo = ({
  propertyInfo,
  handleInputChange,
  propertyDescription,
  setPropertyDescription,
}) => {
  return propertyInfo.map((input, index) => {
    return (
      <InputGroup
        key={index}
        label={input.label}
        type="number"
        value={input.value}
        onChange={(e) =>
          handleInputChange(propertyDescription, setPropertyDescription, e)
        }
        name={input.name}
        symbol={input.symbol}
      />
    );
  });
};

export default PropertyInfo;
