import React from "react";
import "./Navigation.scss";

import Logo from "../img/sunda_logo.png";
import Icon_search from "../img/icon/search.png";

function Navigation() {
    return (
        <div className="nav">
            <div className="logo"><img src={Logo} alt="sunda logo"></img></div>
            <div className="search">
                <select className="category">
                    <option value="title">Title</option>
                    <option value="artist">Artist</option>
                    <option value="curator">Curator</option>
                </select>
                <input type="text" title="Search Awesome Curation" className="search_input"></input>
                <button type="button" className="search_button">
                    <img src={Icon_search} alt="search button"></img>
                </button>
            </div>
            <div className="menu">
                <a>Sign up</a>
                <a>Sign in</a>
            </div>
        </div>
    );
}

export default Navigation;