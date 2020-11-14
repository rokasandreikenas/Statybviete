import React from "react";
import InputGroup from "../../InputGroup";
import PropTypes from "prop-types";

import "./PriceContainer.scss";

const PriceContainer = ({ allSpecialitiesSums, totalSum }) => {
  return (
    <div className="price-container">
      <div className="prices">
        {allSpecialitiesSums.map((speciality, index) => (
          <InputGroup
            key={index}
            type="number"
            value={speciality.value}
            readOnly
            label={speciality.name}
            name={speciality.name}
            symbol="€"
          />
        ))}
      </div>
      <div className="total-sum">
        <InputGroup
          type="number"
          value={totalSum}
          readOnly
          label="Viso: "
          name="Viso"
          symbol="€"
        />
      </div>
    </div>
  );
};

PriceContainer.propTypes = {
  allSpecialitiesSums: PropTypes.array.isRequired,
  totalSum: PropTypes.number.isRequired,
};

export default PriceContainer;
