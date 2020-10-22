import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import { PDFDownloadLink } from "@react-pdf/renderer";

import "react-tabs/style/react-tabs.css";
// import file from "../../assets/icons/file.svg";
// import gear from "../../assets/icons/settings.svg";
import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import Flooring from "../../static/Flooring";
import Walls from "../../static/Walls";
import Bathroom from "../../static/Bathroom";
import Tiles from "../../static/Tiles";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";
import TotalSumContainer from "../TotalSumContainer";
// import PDFfile from "../PDFfile/PDFfile";
// import Button from "../Button";
import InputGroup from "../InputGroup";
import ExportButton from "../PDFfile/ExportButton/ExportButton";
import PriceTable from "../PriceTable/PriceTable";

const EstimateCalculator = () => {
  const [propertyDescription, setPropertyDescription] = useState({
    roomsNumber: "",
    roomsArea: "",
    bathroomArea: "",
  });
  const [electricityQuantity, setElectricityQuantity] = useState({});
  const [flooringQuantity, setFlooringQuantity] = useState({});
  const [wallsQuantity, setWallsQuantity] = useState({});
  const [bathroomQuantity, setBathroomQuantity] = useState({});
  const [tilesQuantity, setTilesQuantity] = useState({});
  const [documentGenerated, setDocumentGenerated] = useState(false);

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

  const propertyInfo = [
    {
      label: "Kambarių skaičius:",
      value: propertyDescription.roomsNumber,
      name: "roomsNumber",
    },
    {
      label: "Kambarių plotas:",
      value: propertyDescription.roomsArea,
      name: "roomsArea",
      symbol: "m²",
    },
    {
      label: "WC ir vonios plotas:",
      value: propertyDescription.bathroomArea,
      name: "bathroomArea",
      symbol: "m²",
    },
  ];

  const createObjectOfInputs = (speciality) => {
    let objects = {};
    for (let i = 0; i < speciality.length; i++) {
      objects[speciality[i].title] = "";
    }

    return objects;
  };

  const handleInputChange = (state, setState, evt) => {
    const value = evt.target.value;
    setState({
      ...state,
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

  const allSpecialitiesSums = {
    electricitySum: electricitySum,
    flooringSum: flooringSum,
    wallsSum: wallsSum,
    bathroomSum: bathroomSum,
    tilesSum: tilesSum,
  };

  const allSpecialitiesSumsArr = Object.values(allSpecialitiesSums);

  const totalSum = () => allSpecialitiesSumsArr.reduce((a, b) => a + b, 0);

  if (Object.keys(wallsQuantity).length === 0) {
    return <div>...</div>;
  }

  return (
    <div className="container">
      <div className="button-container">
        <ExportButton
          documentGenerated={documentGenerated}
          setDocumentGenerated={setDocumentGenerated}
          allSpecialitiesSums={allSpecialitiesSums}
          totalSum={totalSum()}
          tabPanel={tabPanel}
        />
      </div>
      <div className="property-info">
        <div className="description">
          {propertyInfo.map((input, index) => {
            return (
              <InputGroup
                key={index}
                label={input.label}
                type="number"
                value={input.value}
                onChange={(e) =>
                  handleInputChange(
                    propertyDescription,
                    setPropertyDescription,
                    e
                  )
                }
                name={input.name}
                symbol={input.symbol}
              />
            );
          })}
        </div>
        <div className="work-prices">
          <PriceTable />
        </div>
      </div>

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
                  handleInputChange(tab.inputs, tab.inputHandler, e)
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
