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
    state = {
        step : 0,
    };

    componentDidMount() {
        const { step } = this.state;
        const test=document.getElementsByClassName('new-account')[0];
        test.addEventListener('click', () => {
            this.setState({step:2});
        })
    }

    render() {
        const { step } = this.state;

        if ( step == 0 ){
            return (
                <div className="Signup">
                    <div className="with-other-services">
                        <p className="caption">Sign up with other services</p>
                        <div>
                            <Link to="/"><img src={icon_daldalso} className="icon" alt="daldalso"></img></Link>
                            <Link to="/"><img src={icon_google} className="icon" alt="google"></img></Link>
                            <Link to="/"><img src={icon_facebook} className="icon" alt="facebook"></img></Link>
                            <Link to="/"><img src={icon_naver} className="icon" alt="naver"></img></Link>
                            <Link to="/"><img src={icon_kakao} className="icon" alt="kakao"></img></Link>
                        </div>
                    </div>
                    <div className="with-sunda-account">
                        <p className="caption">Sign up with SUNDA account</p>
                        <p className="button-fill new-account">Create a New SUNDA account</p>
                    </div>
                </div>
            );
        }
        else if ( step == 1 ){
            return (
                <div className="Signup">

                </div>
            );
        }
        else if ( step == 2 ){
            return (
                <div className="Signup">
                    <p className="title highlight">Acceptance Letter</p>
                    <div className="letter">
                        <p>We received your application and have completed the review.</p>
                        <p>Welcome to member of SUNDA! Show your curation to the World</p>
                    </div>
                    
                    <Link to="/"><p className="button-fill end-signup">Go to SUNDA Timeline</p></Link>
                </div>
            );
        }
        
    }
}

export default Signup;