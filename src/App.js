// modules
import React from "react";
import { HashRouter, Route } from "react-router-dom";

// routers
import Landing from "./routes/Landing";
import MainTimeline from "./routes/MainTimeline";
import Signup from "./routes/Signup";

// components
import Navigation from "./components/Navigation";

// style sheets
import './App.css';

// -------------- Import is end

function App() {
  return ( 
    <div className="App">
      <HashRouter>
        <Route path="/" exact={true} component={MainTimeline}/>
        <Route path="/landing" exact={true} component={Landing} />
        <Route path="/signup" exact={true} component={Signup} />
      </HashRouter>
    </div>
  );
}

export default App;
