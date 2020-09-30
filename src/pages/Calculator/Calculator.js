import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ContentTitle from "../../components/ContentTitle";
import "./Calculator.scss";

const Calculator = () => {
  return (
    <section className="calculator-page">
      <ContentTitle>Skaičiuoklė</ContentTitle>

      <div className="container">
        <Tabs>
          <TabList>
            <div className="tab-list">
              <Tab>Grindys</Tab>
              <Tab>Sienos</Tab>
              <Tab>Lubos</Tab>
              <Tab>Elektra</Tab>
              <Tab>Vonia</Tab>
            </div>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Calculator;
