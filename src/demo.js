import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DriverCode from "./DrvierCode";
import Header from "./Header";
import JSONFormatter from './Responses/JSONFormatter';
import VerticalTabs from "./TabPanel";

import IOFormat from './IOFormat/ioFormat'

export default function ButtonAppBar() {
  return (
    <div>
      {/*
     <DriverCode />*/
        <Header />}
      <BrowserRouter>
        <Switch>
          <Route path="/" component={VerticalTabs} exact />
          <Route path="/drivercode" component={DriverCode} exact />
          <Route path="/sampleIO" component={JSONFormatter} exact />
          <Route path="/IOformat" component={IOFormat} exact />



        </Switch>
      </BrowserRouter>
    </div>
  );
}
