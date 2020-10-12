import React from "react";
import { HashRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./routes/Landing";
import MainTimeline from "./routes/MainTimeline";

import './App.css';


function App() {
  return ( 
    
    <HashRouter>
      
      <Route path="/" exact={true} component={Landing}/>
      <Route path="/timeline" exact={true} component={MainTimeline} />
    </HashRouter>
  );
}

export default App;
