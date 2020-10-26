import React from "react";
import InputGroup from "../../InputGroup";
import "./PropertyInfo.scss";
const PropertyInfo = ({
  propertyInfo,
  handleInputChange,
  propertyDescription,
  setPropertyDescription,
}) => {
  return (
    <div className="property-info-container">
      {propertyInfo.map((input, index) => {
        return (
          <InputGroup
            key={index}
            label={input.label}
            type={input.type}
            value={input.value}
            onChange={(e) =>
              handleInputChange(propertyDescription, setPropertyDescription, e)
            }
            name={input.name}
            symbol={input.symbol}
          />
        );
      })}
    </div>
  );
};

export default PropertyInfo;
