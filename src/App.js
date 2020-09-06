import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/Navbar";
import PhoneList from './views/PhoneList';
import PhoneDetails from './views/PhoneDetails';
import NotFound from "./components/404/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/phones" component={PhoneList} />
        <Route path="/phones/:id" component={PhoneDetails} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
