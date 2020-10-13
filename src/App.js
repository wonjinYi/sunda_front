import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./routes/Landing";
import MainTimeline from "./routes/MainTimeline";

import './App.css';


function App() {
  return ( 
    <div className="App">
      <HashRouter>
        <Route path="/" exact={true} component={MainTimeline}/>
        <Route path="/landing" exact={true} component={Landing} />
      </HashRouter>
    </div>
  );
}

export default App;
