import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "../config/routes";

import "../styles/main.scss";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div className="app-body">
            <div className="main-content">
              {routes.map((route, i) => {
                return <Route key={i} {...route} />;
              })}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;