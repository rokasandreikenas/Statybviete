import React from "react";

import "./TotalSumContainer.scss";
const TotalSumContainer = ({ title, sumValue }) => {
  return (
    <div className="total-sum-container">
      <span className="text">{title}</span>
      <span className="total-value">{sumValue.toFixed(2)}</span>
      <span className="currency">€</span>
    </div>
  );
};

export default TotalSumContainer;
