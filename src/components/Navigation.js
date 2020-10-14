import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.scss";

import Logo from "../img/sunda_logo.png";
import Icon_search from "../img/icon/search_white.png";

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
                <input type="text" placeholder="Search Awesome Curation" className="input"></input>
                <button type="button" className="button">
                    <img src={Icon_search} alt="search button"></img>
                </button>
            </div>
            <div className="menu">
                <Link><div className="signup common-align">Sign up</div></Link>
                <Link><div className="signin common-align">Sign in</div></Link>
            </div>
        </div>
    );
}

export default Navigation;