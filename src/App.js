import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import PhoneList from './views/PhoneList';
import PhoneDetails from './views/PhoneDetails';
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/phones"></Redirect>
        </Route>
        <Route exact path="/phones" component={PhoneList} />
        <Route path="/phones/:id" component={PhoneDetails} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
