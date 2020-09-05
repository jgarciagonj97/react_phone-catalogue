import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CataloguePage from "./containers/Catalogue-Page/Catalogue-Page";
import PhoneProfilePage from "./containers/PhoneProfilePage/PhoneProfilePage";
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={CataloguePage} />
        <Route path="/catalogue/:id" component={PhoneProfilePage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
