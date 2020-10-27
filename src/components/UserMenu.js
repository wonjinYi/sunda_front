
import React from "react";
import "./UserMenu.scss";

class UserMenu extends React.Component{

  componentDidMount() {
    //const userMenu = document.getElementsByClassName('UserMenu')[0];
    const button = document.getElementsByClassName('user-button')[0];
    const menu = document.getElementsByClassName('user-menu')[0];
    button.addEventListener("click", () => {
      menu.classList.toggle('show');
    });
  }
  

  render() {

    const { username } = this.props;

    return (
      <div className="UserMenu">
        <div className="user-button">
          <h4 className="rect-fill center-align">{username}</h4>
        </div>
        <div className="user-menu">
          <div className="profile subcontainer">
            <h4>Profile</h4>
          </div>
          <div className="curator-space subcontainer">
            <h4>Curator Space</h4>
          </div>
          <div className="logout subcontainer">
            <h4>Logout</h4>
          </div>
        </div>
  
      </div>
    );
  }
  
}



export default UserMenu;