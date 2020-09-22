import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import Header from "./components/Header/Header";
import MainNavigation from "./components/Navigation/MainNavigation";

const App = () => {
  return (
    <Router>
      <Header />
      <MainNavigation />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default App;
