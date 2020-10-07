import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import Flooring from "../../static/Flooring";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";
import TotalSumContainer from "../TotalSumContainer";

const EstimateCalculator = () => {
  const [electricityQuantity, setElectricityQuantity] = useState({
    newElectricityPointsInstallation: 0,
    electricalInstallation: 0,
    luminaireInstallation: 0,
  });

  const [flooringQuantity, setFlooringQuantity] = useState({
    floorLaying: 0,
    plinthInstallation: 0,
    thresholdsInstallation: 0,
  });

  const handleQuantityChange = (quantity, setQuantity, evt) => {
    const value = evt.target.value;
    setQuantity({
      ...quantity,
      [evt.target.name]: value,
    });
  };

  const specialityTotalSum = (quantity, speciality) => {
    const arr = Object.values(quantity).map((item, index) => {
      return item * speciality[index].price;
    });

    return arr.reduce((a, b) => a + b, 0);
  };

  const electricitySum = specialityTotalSum(electricityQuantity, Electricity);
  const flooringSum = specialityTotalSum(flooringQuantity, Flooring);

  const allSpecialitieSums = [electricitySum, flooringSum];
  const totalSum = () => allSpecialitieSums.reduce((a, b) => a + b, 0);

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
          <EstimateTable
            list={Flooring}
            inputs={flooringQuantity}
            handleChange={(e) =>
              handleQuantityChange(flooringQuantity, setFlooringQuantity, e)
            }
          />
        </TabPanel>
        <TabPanel>
          <EstimateTable
            list={Electricity}
            inputs={electricityQuantity}
            handleChange={(e) =>
              handleQuantityChange(
                electricityQuantity,
                setElectricityQuantity,
                e
              )
            }
          />
        </TabPanel>
        <TabPanel>
          <h2>Vonia</h2>
        </TabPanel>
      </Tabs>
      <TotalSumContainer title="Viso" sumValue={totalSum()} />
    </div>
  );
};

export default EstimateCalculator;
