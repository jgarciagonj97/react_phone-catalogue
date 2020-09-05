import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Phones from "./components/Phones/PhonesView";
import PhoneDetailed from "./components/PhoneDetailed/PhoneDetailedView";
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/phones" component={Phones} />
        <Route path="/item/:id" component={PhoneDetailed} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
