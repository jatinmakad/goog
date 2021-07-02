import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Searchpage from "./Searchpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <Searchpage />
          </Route>

          <Route path="">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
