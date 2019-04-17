import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../config/routes";

import "../styles/main.scss";

const App = () => (
  <div className="app">
    <Router>
      <div className="app-body">
        <div className="main-content">
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </div>
      </div>
    </Router>
  </div>
);

export default App;
