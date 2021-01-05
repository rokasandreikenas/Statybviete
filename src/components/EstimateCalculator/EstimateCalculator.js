import React, { useState, useEffect } from "react";

import TabInfo from "../../static/TabInfo";
import { category } from "../../static/JobCategorys";

import "./EstimateCalculator.scss";
import ExportButton from "../PDFfile/ExportButton/ExportButton";
import PriceContainer from "./PriceContainer";
import PropertyInfo from "./PropertyInfo/PropertyInfo";
import EstimateSpreadsheet from "./EstimateSpreadsheet/EstimateSpreadsheet";

const EstimateCalculator = ({ jobs }) => {
  const [propertyDescription, setPropertyDescription] = useState({
    apartamentName: "",
    roomsNumber: "",
    roomsArea: "",
    bathroomArea: "",
  });

  const [electricityObject, setElectricityObject] = useState({});
  const [electricityInput, setElectricityInput] = useState({});
  const [flooringObject, setFlooringObject] = useState({});
  const [flooringInput, setFlooringInput] = useState({});
  const [wallsObject, setWallsObject] = useState({});
  const [wallsInput, setWallsInput] = useState({});
  const [bathroomObject, setBathroomObject] = useState({});
  const [bathroomInput, setBathroomInput] = useState({});
  const [tilesObject, setTilesObject] = useState({});
  const [tilesInput, setTilesInput] = useState({});
  const [otherObject, setOtherObject] = useState({});
  const [otherInput, setOtherInput] = useState({});

  const [documentGenerated, setDocumentGenerated] = useState(false);

  useEffect(() => {
    const electricity = jobs.filter(
      (job) => job.category === category.electricity
    );
    const flooring = jobs.filter((job) => job.category === category.flooring);
    const walls = jobs.filter((job) => job.category === category.walls);
    const bathroom = jobs.filter((job) => job.category === category.bathroom);
    const tiles = jobs.filter((job) => job.category === category.tiles);
    const other = jobs.filter((job) => job.category === category.other);

    setElectricityObject(electricity);
    setElectricityInput(createObjectOfInputs(electricity));
    setFlooringObject(flooring);
    setFlooringInput(createObjectOfInputs(flooring));
    setWallsObject(walls);
    setWallsInput(createObjectOfInputs(walls));
    setBathroomObject(bathroom);
    setBathroomInput(createObjectOfInputs(bathroom));
    setTilesObject(tiles);
    setTilesInput(createObjectOfInputs(tiles));
    setOtherObject(other);
    setOtherInput(createObjectOfInputs(other));
  }, [jobs]);

  const tabPanel = [
    {
      list: electricityObject,
      inputs: electricityInput,
      inputHandler: setElectricityInput,
    },
    {
      list: bathroomObject,
      inputs: bathroomInput,
      inputHandler: setBathroomInput,
    },
    {
      list: wallsObject,
      inputs: wallsInput,
      inputHandler: setWallsInput,
    },
    {
      list: flooringObject,
      inputs: flooringInput,
      inputHandler: setFlooringInput,
    },
    {
      list: tilesObject,
      inputs: tilesInput,
      inputHandler: setTilesInput,
    },
    {
      list: otherObject,
      inputs: otherInput,
      inputHandler: setOtherInput,
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

  const electricitySum = specialityTotalSum(
    electricityInput,
    electricityObject
  );
  const flooringSum = specialityTotalSum(flooringInput, flooringObject);
  const wallsSum = specialityTotalSum(wallsInput, wallsObject);
  const bathroomSum = specialityTotalSum(bathroomInput, bathroomObject);
  const tilesSum = specialityTotalSum(tilesInput, tilesObject);
  const othersSum = specialityTotalSum(otherInput, otherObject);

  const allSpecialitiesSums = [
    { name: "Elektros darbai", value: electricitySum },
    { name: "Santechnikos darbai", value: bathroomSum },
    { name: "Sienų/Lubų darbai", value: wallsSum },
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

  if (Object.keys(electricityInput).length === 0) {
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
