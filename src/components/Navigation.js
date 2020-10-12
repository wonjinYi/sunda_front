import React from "react";
import "./Navigation.css";

import Logo from "../img/sunda_logo.png";

function Navigation() {
    return (
        <div id="nav">
            <img src={Logo} alt="SUNDA"  />
        </div>
    );
}

export default Navigation;