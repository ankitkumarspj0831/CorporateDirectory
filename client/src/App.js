import "./App.css";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./containers/Home";
import AddEmployee from "./containers/AddEmployee";

class App extends Component {
  render() {
    let routes = (
      <BrowserRouter>
        <Switch>
          <Route path="/feed" exact component={Home} />
          <Route path="/add" component={AddEmployee} />
          <Redirect to="/feed" />
        </Switch>
      </BrowserRouter>
    );
    return (
      <div className="App">
        <Navigation />
        {routes}
      </div>
    );
  }
}

export default App;
