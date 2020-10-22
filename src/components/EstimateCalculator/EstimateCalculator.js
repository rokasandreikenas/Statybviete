import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { PDFDownloadLink } from "@react-pdf/renderer";

import "react-tabs/style/react-tabs.css";
import Input from "../Input";
// import pdfFile from "../../assets/icons/pdf-file.svg";
import file from "../../assets/icons/file.svg";
import gear from "../../assets/icons/settings.svg";
import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import Flooring from "../../static/Flooring";
import Walls from "../../static/Walls";
import Bathroom from "../../static/Bathroom";
import Tiles from "../../static/Tiles";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";
import TotalSumContainer from "../TotalSumContainer";
import PDFfile from "../PDFfile/PDFfile";
import Button from "../Button";

const EstimateCalculator = () => {
  const [roomsNumber, setRoomsNumber] = useState("");
  const [roomsArea, setRoomsArea] = useState("");
  const [bathroomArea, setBathroomArea] = useState("");
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

  const createObjectOfInputs = (speciality) => {
    let objects = {};
    for (let i = 0; i < speciality.length; i++) {
      objects[speciality[i].title] = "";
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
        <div className="export-button">
          {documentGenerated ? (
            <PDFDownloadLink
              document={
                <PDFfile
                  allSpecialitiesSums={allSpecialitiesSums}
                  totalSum={totalSum()}
                  workInfo={tabPanel}
                />
              }
              fileName="samata.pdf"
            >
              {({ blob, url, loading, error }) => (
                <Button className={loading ? "button loading" : "button"}>
                  <img src={file} alt={file} />
                  <span>Download PDF</span>
                </Button>
              )}
            </PDFDownloadLink>
          ) : (
            <Button onClick={() => setDocumentGenerated(true)}>
              <img src={gear} alt={gear} />
              <span>Generate PDF</span>
            </Button>
          )}
        </div>
      </div>
      <div className="estimate-info">
        <div className="input-group">
          <label>Kambarių skaičius:</label>
          <Input
            type="number"
            value={roomsNumber}
            onChange={(e) => setRoomsNumber(e.target.value)}
            name="roomsNumber"
          />
        </div>
        <div className="input-group">
          <label>Kambarių plotas:</label>
          <Input
            type="number"
            value={roomsArea}
            onChange={(e) => setRoomsArea(e.target.value)}
            name="roomsArea"
          />
          <span>m²</span>
        </div>
        <div className="input-group">
          <label>WC ir vonios plotas:</label>
          <Input
            type="number"
            value={bathroomArea}
            onChange={(e) => setBathroomArea(e.target.value)}
            name="bathroomArea"
          />
          <span>m²</span>
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
