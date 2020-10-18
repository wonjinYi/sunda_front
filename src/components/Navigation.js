import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//component
import CreateNew from "./CreateNew";
import ShowNoti from "./ShowNoti";
import {Button, Menu, MenuItem} from '@material-ui/core';

//css
import "./Navigation.scss";

//etc resource
import Logo from "../img/sunda_logo.png";
import Icon_search from "../img/icon/search_white.png";
import Icon_create from "../img/icon/create.png";
import Icon_bell from "../img/icon/bell.png"
import Icon_block from "../img/icon/block.png";
import Icon_page from "../img/icon/page.png";

class Navigation extends React.Component {
    state = {
        loggedin : false,
        isOpen : false,
    };


    componentDidMount(){
    }

    render () {
        const { loggedin, username } = this.props
        console.log("here is nav. : ", loggedin);

        if(loggedin){
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
                            <img src={Icon_search} className="icon" alt="search button"></img>
                        </button>
                    </div>
                    <div className="menu">
                        <CreateNew />
                        <div>
                            <img src={Icon_bell} className="icon" alt="notification"></img>
                            <ShowNoti />
                        </div>
                        <h4 className="rect-fill center-align">{username}</h4>
                    </div>
                </div>
            );
        } else {
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
                            <img src={Icon_search} className="icon" alt="search button"></img>
                        </button>
                    </div>
                    <div className="menu">
                        <Link className="rect-nofill center-align">Sign up</Link>
                        <Link className="rect-fill center-align">Sign in</Link>
                    </div>
                </div>
            );
        }
       
    }
    
}

Navigation.propTypes = {
    loggedin : PropTypes.bool.isRequired,
    username : PropTypes.string,
};

export default Navigation;