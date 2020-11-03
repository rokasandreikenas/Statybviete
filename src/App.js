import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MainNavigation from "./components/Navigation/MainNavigation";
import Routes from "./components/Routes";
import "./App.scss";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <MainNavigation />
      <Routes />
    </Router>
  );
};

export default App;
