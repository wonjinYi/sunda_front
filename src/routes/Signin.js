import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Signin.scss";

import icon_daldalso from "../img/icon/sns_daldalso.png";
import icon_google from "../img/icon/sns_google.png";
import icon_facebook from "../img/icon/sns_facebook.png";
import icon_naver from "../img/icon/sns_naver.png";
import icon_kakao from "../img/icon/sns_kakao.png";

class Signin extends React.Component {

    render() {
        return (
            <div className="Signin">
                <div className="with-other-services">
                    <p className="caption">Sign in with other services</p>
                    <div>
                        <Link to="/"><img src={icon_daldalso} className="icon" alt="daldalso"></img></Link>
                        <Link to="/"><img src={icon_google} className="icon" alt="google"></img></Link>
                        <Link to="/"><img src={icon_facebook} className="icon" alt="facebook"></img></Link>
                        <Link to="/"><img src={icon_naver} className="icon" alt="naver"></img></Link>
                        <Link to="/"><img src={icon_kakao} className="icon" alt="kakao"></img></Link>
                    </div>
                </div>
                <div className="with-sunda-account">
                    <p className="caption">Sign inp with SUNDA account</p>
                </div>
            </div>
        );
    }
}

export default Signin;