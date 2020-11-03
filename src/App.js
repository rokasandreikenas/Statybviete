import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import Contacts from "./pages/Contacts";
import Header from "./components/Header";
import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <MainNavigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/skaiciuokle" component={Calculator} exact />
        <Route path="/kontaktai" component={Contacts} exact />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
};

export default App;
