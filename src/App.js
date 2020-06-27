import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import "./App.css";

function App(){
  return (
    <HashRouter>
      {/* <Route path="/home">
          <h1>Home</h1>
      </Route>
      <Route path="/home/introduction">
          <h1>Introduction</h1>
      </Route>
      <Route path="/about">
          <h1>About</h1>
      </Route> */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
  </HashRouter>
  )
}

export default App;