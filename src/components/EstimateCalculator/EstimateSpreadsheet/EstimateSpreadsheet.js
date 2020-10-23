import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import EstimateTable from "./EstimateTable/EstimateTable";

import "./EstimateSpreadsheet.scss";
const EstimateSpreadsheet = ({ tabInfo, tabPanel, handleInputChange }) => {
  return (
    <Tabs>
      <TabList>
        {tabInfo.map((tab, index) => (
          <Tab key={index}>
            <img src={tab.image} alt={tab.imageInfo} />
            <p>{tab.name}</p>
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
  );
};

export default EstimateSpreadsheet;
