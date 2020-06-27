import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail";
import "./App.css";

function App(){
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
      <Route path="/movie-detail" exact={true} component={Detail} />
  </HashRouter>
  )
}

export default App;