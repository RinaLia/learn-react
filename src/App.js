import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./page/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
