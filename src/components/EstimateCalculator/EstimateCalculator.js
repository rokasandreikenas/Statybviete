import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import Flooring from "../../static/Flooring";
import Walls from "../../static/Walls";
import Bathroom from "../../static/Bathroom";
import Tiles from "../../static/Tiles";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";
import TotalSumContainer from "../TotalSumContainer";

const EstimateCalculator = () => {
  const [electricityQuantity, setElectricityQuantity] = useState({});
  const [flooringQuantity, setFlooringQuantity] = useState({});
  const [wallsQuantity, setWallsQuantity] = useState({});
  const [bathroomQuantity, setBathroomQuantity] = useState({});
  const [tilesQuantity, setTilesQuantity] = useState({});

  useEffect(() => {
    setElectricityQuantity(createObjectOfInputs(Electricity));
    setFlooringQuantity(createObjectOfInputs(Flooring));
    setWallsQuantity(createObjectOfInputs(Walls));
    setBathroomQuantity(createObjectOfInputs(Bathroom));
    setTilesQuantity(createObjectOfInputs(Tiles));
  }, []);

  const tabPanel = [
    {
      list: Walls,
      inputs: wallsQuantity,
      inputHandler: setWallsQuantity,
    },
    {
      list: Flooring,
      inputs: flooringQuantity,
      inputHandler: setFlooringQuantity,
    },
    {
      list: Electricity,
      inputs: electricityQuantity,
      inputHandler: setElectricityQuantity,
    },
    {
      list: Bathroom,
      inputs: bathroomQuantity,
      inputHandler: setBathroomQuantity,
    },
    {
      list: Tiles,
      inputs: tilesQuantity,
      inputHandler: setTilesQuantity,
    },
  ];

  const createObjectOfInputs = (speciality) => {
    let objects = {};
    for (let i = 0; i < speciality.length; i++) {
      objects[speciality[i].title] = 0;
    }

    return objects;
  };

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
  const wallsSum = specialityTotalSum(wallsQuantity, Walls);
  const bathroomSum = specialityTotalSum(bathroomQuantity, Bathroom);
  const tilesSum = specialityTotalSum(tilesQuantity, Tiles);

  const allSpecialitieSums = [
    electricitySum,
    flooringSum,
    wallsSum,
    bathroomSum,
    tilesSum,
  ];
  const totalSum = () => allSpecialitieSums.reduce((a, b) => a + b, 0);

  if (Object.keys(wallsQuantity).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Tabs>
        <TabList>
          {TabInfo.map((tab, index) => (
            <Tab key={index}>
              <img src={tab.image} alt={tab.imageInfo} />
              {tab.name}
            </Tab>
          ))}
        </TabList>

        {tabPanel.map((tab, index) => {
          return (
            <TabPanel key={index}>
              <EstimateTable
                list={tab.list}
                inputs={tab.inputs}
                handleChange={(e) =>
                  handleQuantityChange(tab.inputs, tab.inputHandler, e)
                }
              />
            </TabPanel>
          );
        })}
      </Tabs>
      <TotalSumContainer title="Viso" sumValue={totalSum()} />
    </div>
  );
};

export default EstimateCalculator;
