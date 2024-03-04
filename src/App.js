import React from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react";
import Checkout from "./Checkout";

function App() {
  return (
    //BEM (block-name_elem-name_mod-name-mod-val. Names are written in lowercase Latin letters)
    <Router>
      <div className="app">
        <Header />

        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
