import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";

const EstimateCalculator = () => {
  const [electricityQuantity, setElectricityQuantity] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const handleElectricityQuantityChange = (evt) => {
    const value = evt.target.value;
    setElectricityQuantity({
      ...electricityQuantity,
      [evt.target.name]: value,
    });
  };
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
    </div>
  );
};

export default EstimateCalculator;
