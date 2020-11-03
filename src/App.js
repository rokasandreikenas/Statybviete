import React from "react";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import MainNavigation from "./components/Navigation/MainNavigation";
import Routes from "./components/Routes";
import "./App.scss";

const App = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <MainNavigation />
      <Routes />
    </HashRouter>
  );
};

export default App;
