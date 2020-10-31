import React, { useState, useEffect } from "react";

import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import Flooring from "../../static/Flooring";
import Walls from "../../static/Walls";
import Bathroom from "../../static/Bathroom";
import Tiles from "../../static/Tiles";
import Other from "../../static/Other";
import "./EstimateCalculator.scss";
import ExportButton from "../PDFfile/ExportButton/ExportButton";
import PriceContainer from "./PriceContainer";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
import EstimateSpreadsheet from "./EstimateSpreadsheet/EstimateSpreadsheet";

const EstimateCalculator = () => {
  const [propertyDescription, setPropertyDescription] = useState({
    apartamentName: "",
    roomsNumber: "",
    roomsArea: "",
    bathroomArea: "",
  });
  const [electricity, setElectricity] = useState({});
  const [flooring, setFlooring] = useState({});
  const [walls, setWalls] = useState({});
  const [bathroom, setBathroom] = useState({});
  const [tiles, setTiles] = useState({});
  const [other, setOther] = useState({});

  const [documentGenerated, setDocumentGenerated] = useState(false);

  useEffect(() => {
    setElectricity(createObjectOfInputs(Electricity));
    setFlooring(createObjectOfInputs(Flooring));
    setWalls(createObjectOfInputs(Walls));
    setBathroom(createObjectOfInputs(Bathroom));
    setTiles(createObjectOfInputs(Tiles));
    setOther(createObjectOfInputs(Other));
  }, []);

  const tabPanel = [
    {
      list: Electricity,
      inputs: electricity,
      inputHandler: setElectricity,
    },
    {
      list: Bathroom,
      inputs: bathroom,
      inputHandler: setBathroom,
    },
    {
      list: Walls,
      inputs: walls,
      inputHandler: setWalls,
    },
    {
      list: Flooring,
      inputs: flooring,
      inputHandler: setFlooring,
    },
    {
      list: Tiles,
      inputs: tiles,
      inputHandler: setTiles,
    },
    {
      list: Other,
      inputs: other,
      inputHandler: setOther,
    },
  ];

  const propertyInfo = [
    {
      label: "Objekto pavadinimas:",
      value: propertyDescription.apartamentName,
      name: "apartamentName",
      type: "text",
    },
    {
      label: "Kambarių skaičius:",
      value: propertyDescription.roomsNumber,
      name: "roomsNumber",
      type: "number",
    },
    {
      label: "Kambarių plotas:",
      value: propertyDescription.roomsArea,
      name: "roomsArea",
      symbol: "m²",
      type: "number",
    },
    {
      label: "WC ir vonios plotas:",
      value: propertyDescription.bathroomArea,
      name: "bathroomArea",
      symbol: "m²",
      type: "number",
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

  const specialityTotalSum = (jobs, speciality) => {
    const arr = Object.values(jobs).map((item, index) => {
      return item * speciality[index].price;
    });

    return arr.reduce((a, b) => a + b, 0);
  };

  const electricitySum = specialityTotalSum(electricity, Electricity);
  const flooringSum = specialityTotalSum(flooring, Flooring);
  const wallsSum = specialityTotalSum(walls, Walls);
  const bathroomSum = specialityTotalSum(bathroom, Bathroom);
  const tilesSum = specialityTotalSum(tiles, Tiles);
  const othersSum = specialityTotalSum(other, Other);

  const allSpecialitiesSums = [
    { name: "Elektros darbai", value: electricitySum },
    { name: "Santechnikos darbai", value: bathroomSum },
    { name: "Sienų/lubų darbai", value: wallsSum },
    { name: "Grindų klojimo darbai", value: flooringSum },
    { name: "Plytelių klojimo darbai", value: tilesSum },
    { name: "Kiti darbai", value: othersSum },
  ];

  const totalSum = () => {
    const arr = allSpecialitiesSums.map((item) => {
      return item.value;
    });

    return arr.reduce((a, b) => a + b, 0);
  };

  if (Object.keys(walls).length === 0) {
    return null;
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
          propertyInfo={propertyInfo}
        />
      </div>
      <div className="property-info">
        <div className="description">
          <PropertyInfo
            propertyInfo={propertyInfo}
            handleInputChange={handleInputChange}
            propertyDescription={propertyDescription}
            setPropertyDescription={setPropertyDescription}
          />
        </div>
        <div className="work-prices">
          <PriceContainer
            allSpecialitiesSums={allSpecialitiesSums}
            totalSum={totalSum()}
          />
        </div>
      </div>
      <EstimateSpreadsheet
        tabInfo={TabInfo}
        tabPanel={tabPanel}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default EstimateCalculator;
