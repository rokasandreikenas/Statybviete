import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";
import TotalSumContainer from "../TotalSumContainer";

const EstimateCalculator = () => {
  const [electricityQuantity, setElectricityQuantity] = useState({
    newElectricityPointsInstallation: 0,
    electricalInstallation: 0,
    luminaireInstallation: 0,
  });

  const handleElectricityQuantityChange = (evt) => {
    const value = evt.target.value;
    setElectricityQuantity({
      ...electricityQuantity,
      [evt.target.name]: value,
    });
  };

  // const sum = Object.values(electricityQuantity).map((item, index) => {
  //   return item * Electricity[index].price;
  // });

  const sum = (quantity, speciality) =>
    Object.values(quantity).map((item, index) => {
      return item * speciality[index].price;
    });

  const totalSum = (sum) => {
    return sum.reduce((a, b) => a + b);
  };

  const electricitySum = sum(electricityQuantity, Electricity);

  console.log(electricitySum);

  // const totalSum = sum.reduce((a, b) => a + b);

  return (
    <div className="container">
      <Tabs>
        <TabList>
          {TabInfo &&
            TabInfo.map((tab, index) => (
              <Tab key={index}>
                <img src={tab.image} alt={tab.imageInfo} />
                {tab.name}
              </Tab>
            ))}
        </TabList>

        <TabPanel>
          <h2>Sienos/Lubos</h2>
        </TabPanel>
        <TabPanel>
          <h2>Grindys</h2>
        </TabPanel>
        <TabPanel>
          <EstimateTable
            list={Electricity}
            inputs={electricityQuantity}
            handleChange={handleElectricityQuantityChange}
          />
        </TabPanel>
        <TabPanel>
          <h2>Vonia</h2>
        </TabPanel>
      </Tabs>
      <TotalSumContainer title="Viso" sumValue={totalSum(electricitySum)} />
    </div>
  );
};

export default EstimateCalculator;
