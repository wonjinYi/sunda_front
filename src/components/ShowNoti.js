import React from "react";
import "./ShowNoti.scss";

import Icon_bell from "../img/icon/bell.png"

class ShowNoti extends React.Component {
    
    componentDidMount() {
        const notiButton = document.getElementsByClassName('noti-button')[0];
        notiButton.addEventListener("click", () => {
          const notiContents = document.getElementsByClassName('noti-contents')[0];
          notiContents.classList.toggle('show');
        })
      }

    render() {
        return (
            <div className="ShowNoti">
                <div className="noti-button">
                    <img src={Icon_bell} className="icon" alt="crate"></img>
                </div>
                <div className="noti-contents">
                    hihihi
                </div>
            </div>
        );
    }
    
}

export default ShowNoti;