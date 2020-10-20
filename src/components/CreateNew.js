import React from "react";
import "./CreateNew.scss";

import Icon_create from "../img/icon/create.png";
import Icon_block from "../img/icon/block.png";
import Icon_page from "../img/icon/page.png";

class CreateNew extends React.Component{

  componentDidMount() {
    const createButton = document.getElementsByClassName('create-button')[0];
    createButton.addEventListener("click", () => {
      const createMenu = document.getElementsByClassName('create-menu')[0];
      createMenu.classList.toggle('show');
    })
  }
  

  render() {
    return (
      <div className="CreateNew">
        <div className="create-button">
          <img src={Icon_create} className="icon" alt="create"></img>
        </div>
        <div className="create-menu">
          <div className="newblock subcontainer">
            <img src={Icon_block} className="icon" alt="block"></img>
            <p>New Block</p>
          </div>
          <div className="newpage subcontainer">
            <img src={Icon_page} className="icon" alt="page"></img>
            <p>New Page</p>
          </div>
        </div>
  
      </div>
    );
  }
  
}



export default CreateNew;

/*import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Icon_block from "../img/icon/block.png";
import Icon_page from "../img/icon/page.png";
import Icon_create from "../img/icon/create.png";

export default function CreateNew() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="CreateNew">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <img src={Icon_create} className="sunda-icon" alt="aa" width="30px"></img>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>New Block</MenuItem>
        <MenuItem onClick={handleClose}>New Page</MenuItem>
      </Menu>
    </div>
  );
}
*/