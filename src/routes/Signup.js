import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./Signup.scss";

import icon_daldalso from "../img/icon/sns_daldalso.png";
import icon_google from "../img/icon/sns_google.png";
import icon_facebook from "../img/icon/sns_facebook.png";
import icon_naver from "../img/icon/sns_naver.png";
import icon_kakao from "../img/icon/sns_kakao.png";

class Signup extends React.Component {
    render () {
        return (
            <div className="Signup">

                <p className="description">Please Select Account type you will use in SUNDA</p>
                <div className="with-other-services">
                    <p>Sign up with other services</p>
                    <div>
                        <Link><img src={icon_daldalso} className="icon" alt="daldalso"></img></Link>
                        <Link><img src={icon_google} className="icon" alt="google"></img></Link>
                        <Link><img src={icon_facebook} className="icon" alt="facebook"></img></Link>
                        <Link><img src={icon_naver} className="icon" alt="naver"></img></Link>
                        <Link><img src={icon_kakao} className="icon" alt="kakao"></img></Link>
                    </div>
                </div>
                <div className="with-sunda-account">
                    <p>Sign up with SUNDA account</p>
                    <Link><p className="button-fill new-account">Create a New SUNDA account</p></Link>
                </div>
            </div>
        );
    }
}

export default Signup;