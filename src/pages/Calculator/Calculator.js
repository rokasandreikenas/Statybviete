import React, { useEffect, useState } from "react";
import ContentTitle from "../../components/ContentTitle";
import EstimateCalculator from "../../components/EstimateCalculator";
import "./Calculator.scss";
import axios from "axios";
import Loader from "../../components/Loader";

const Calculator = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("/jobs");
      setJobs(result.data);
    };

    fetchData();
  }, []);

  return (
    <section className="calculator-page">
      <ContentTitle>Skaičiuoklė</ContentTitle>
      {jobs.length === 0 ? <Loader /> : <EstimateCalculator jobs={jobs} />}
    </section>
  );
};

export default Calculator;
