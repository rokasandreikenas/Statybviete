import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabInfo from "../../static/TabInfo";

import "./EstimateCalculator.scss";

const EstimateCalculator = () => {
  return (
    <div className="container">
      <div className="tab-lis">
        <Tabs>
          <TabList>
            {TabInfo.map((tab) => {
              <Tab>
                <img src={tab.image} alt={image.imageInfo} />
                {image.name}
              </Tab>;
            })}
          </TabList>

          <TabPanel>
            <h2>Grindys</h2>
          </TabPanel>
          <TabPanel>
            <h2>Sienos/Lubos</h2>
          </TabPanel>
          <TabPanel>
            <h2>Elektra</h2>
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
