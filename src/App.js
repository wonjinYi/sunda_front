// modules
import React from "react";
import { HashRouter, Route } from "react-router-dom";

// routers
import Landing from "./routes/Landing";
import MainTimeline from "./routes/MainTimeline";
import Signup from "./routes/Signup";
import Signin from "./routes/Signin";

// components
import Navigation from "./components/Navigation";

// style sheets
import './App.css';

// -------------- Import end



class App extends React.Component {
  state = {
    loggedin : false,
    username : "thisisverylongname",
    test : 123,
  };

  render() {
    const { loggedin, username, test } = this.state;
    return (
      <HashRouter>
        <Navigation loggedin={loggedin} username={username} />
        <Route path="/" exact={true} component={MainTimeline}/>
        <Route path="/landing" exact={true} component={Landing} />
        <Route path="/signup" exact={true} component={Signup} />
        <Route path="/signin" exact={true} component={Signin} />
      </HashRouter>
    );
  }

}
//        
export default App;
