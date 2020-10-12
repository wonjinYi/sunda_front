import React from 'react';
import { Link } from "react-router-dom";

import "./Landing.css";
import "./commonStyle.css";

import Logo from "../img/sunda_logo.png";

function Ladning () {
    return (
        <div id="Landing-main">
            <div id="logo">
                <img src={Logo} alt="sunda_logo"></img>
                <h2><div class="highlight">We curate our today</div></h2>
            </div>

            <div id="contents">
                <p>Anyone can curate music from Infinite Source, <div class="highlight">in SUNDA</div></p>
                <p>Express and summarize your daily life in a different way</p>
                <p><div class="highlight">We, Curators of SUNDA, are waiting you</div></p>
            </div>

            <div id="btn">
                <Link to="/timeline"><a class="button btn-landing">Go to SUNDA Timeline</a></Link>
                <a class="button button-fill btn-landing">Be a new Curator</a>
            </div>
        </div>
    );
}

export default Ladning;