import React from "react";
//import "./Navigation.css";

import Logo from "../img/sunda_logo.png";

function Navigation() {
    return (
        <div className="nav">
            <div className="logo"><img src={Logo} alt="sunda logo"></img></div>
            <div className="search">
                <input type="text" title="검색" className="search_input"></input>
                <button type="button" className="search_button">검색</button>
            </div>
            <div className="menu">
                <a>Sign up</a>
                <a>Sign in</a>
            </div>
        </div>
    );
}

export default Navigation;