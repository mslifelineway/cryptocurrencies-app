import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { pagePaths } from "./utils/constants";
import Home from "./containers/Home";
import Cryptocurrencies from "./containers/Cryptocurrencies";
import Exachanges from "./containers/Exchanges";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={pagePaths.root} component={Home} />
        <Route path={pagePaths.cryptocurrencies} component={Cryptocurrencies} />
        <Route path={pagePaths.exchanges} component={Exachanges} />
      </Switch>
    </Router>
  );
}

export default App;
