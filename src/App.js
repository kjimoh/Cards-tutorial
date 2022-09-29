import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import CardDetails from "./CardDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:cardId">
          <CardDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
