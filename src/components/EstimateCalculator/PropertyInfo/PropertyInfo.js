import React from "react";
import InputGroup from "../../InputGroup";
import PropTypes from "prop-types";

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

PropertyInfo.propTypes = {
  propertyInfo: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  propertyDescription: PropTypes.object.isRequired,
  setPropertyDescription: PropTypes.func.isRequired,
};

export default PropertyInfo;
