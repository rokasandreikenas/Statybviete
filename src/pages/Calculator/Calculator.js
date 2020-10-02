import React from "react";
import ContentTitle from "../../components/ContentTitle";
import EstimateCalculator from "../../components/EstimateCalculator";
import "./Calculator.scss";

const Calculator = () => {
  return (
    <section className="calculator-page">
      <ContentTitle>Skaičiuoklė</ContentTitle>
      <EstimateCalculator />
    </section>
  );
};

export default Calculator;
