import React from "react";
import InputGroup from "../../InputGroup";

import "./PriceContainer.scss";

const PriceContainer = ({ allSpecialitiesSums }) => {
  return (
    <div className="price-container">
      <div className="prices">
        {allSpecialitiesSums.map((speciality, index) => (
          <InputGroup
            key={index}
            value={speciality.value}
            readOnly
            label={speciality.name}
            name={speciality.name}
            symbol="€"
          />
        ))}
      </div>
      <div className="total-sum">
        <InputGroup value={0} readOnly label="Viso: " name="Viso" symbol="€" />
      </div>
    </div>
  );
};

export default PriceContainer;
