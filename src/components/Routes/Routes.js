import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../../pages/Home";
import Calculator from "../../pages/Calculator";
import Contacts from "../../pages/Contacts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/skaiciuokle" component={Calculator} exact />
      <Route path="/kontaktai" component={Contacts} exact />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Routes;
