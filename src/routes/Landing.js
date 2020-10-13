import React from 'react';
import { Link } from "react-router-dom";

import "./Landing.scss";
//import "./commonStyle.css";

import Logo from "../img/sunda_logo.png";

function Ladning () {
    return (
        <div id="Landing">
            <div id="logo">
                <img src={Logo} alt="sunda_logo"></img>
                <h2 className="highlight">We curate our today</h2>
            </div>

            <div id="contents">
                <p className="inline">Anyone can curate music from Infinite Source, </p><p className="highlight inline">in SUNDA</p>
                <p>Express and summarize your daily life in a different way</p>
                <p className="highlight">We, Curators of SUNDA, are waiting you</p>
            </div>

            <div id="btn">
                <Link to="/" className="button-nofill btn-landing btn-gototimeline">Go to SUNDA Timeline</Link>
                <a className="button-fill btn-landing btn-signup">Be a new Curator</a>
            </div>
        </div>
    );
}

export default Ladning;