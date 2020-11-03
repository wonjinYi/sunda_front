import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//component
import CreateNew from "./CreateNew";
import ShowNoti from "./ShowNoti";
import UserMenu from "./UserMenu";

//css
import "./Navigation.scss";

//etc resource
import Logo from "../img/sunda_logo.png";
import Icon_search from "../img/icon/search_white.png";


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
                    <Link to="/" className="logo"><img src={Logo} alt="sunda logo"></img></Link>
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
                        <ShowNoti />
                        <UserMenu username={username} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="nav">
                    <Link to="/" className="logo"><img src={Logo} alt="sunda logo"></img></Link>
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
                        <Link className="rect-nofill center-align" to="/signup">Sign up</Link>
                        <Link className="rect-fill center-align" to="/signin">Sign in</Link>
                    </div>
                </div>
            );
        }
       
    }
    
}

Navigation.propTypes = {
    //loggedin : PropTypes.bool.isRequired,
    //username : PropTypes.string,
};

export default Navigation;