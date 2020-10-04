import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import TabInfo from "../../static/TabInfo";
import Electricity from "../../static/Electricity";
import "./EstimateCalculator.scss";
import EstimateTable from "./EstimateTable/EstimateTable";

const EstimateCalculator = () => {
  return (
    <div className="container">
      <div className="tab-lis">
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
            <EstimateTable list={Electricity} />
          </TabPanel>
          <TabPanel>
            <h2>Vonia</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default EstimateCalculator;
