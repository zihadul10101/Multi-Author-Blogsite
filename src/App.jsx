import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/home/Home";
function App() {
  return (
    <Router>

      <Switch>

        <Route path="/" component={Home} exact />


      </Switch>


    </Router>
  );
}

export default App;
