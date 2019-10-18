import React from "react";
import { BrowserRouter as Router, /*Switch,*/ Route } from "react-router-dom";
import "./App.css";

import Reporters from "./Pages/reporters/reporters";
import ReportersDetail from "./Pages/reporterDetail/reporter-detail";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Reporters}></Route>
          <Route exact path="/reporter/:id" component={ReportersDetail}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
