import React from 'react';
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
/*
import React from "react";
import "./CreateNew.scss";



function CreateNew(){
    return (
        <div className="CreateNew">
            <div className="newblock subcontainer">
                <img src={Icon_block} className="sunda-icon" alt="block"></img>
                <h4>New Block</h4>
            </div>
            <div className="newpage subcontainer">
                <img src={Icon_page} className="sunda-icon" alt="page"></img>
                <h4>New Page</h4>
            </div>
        </div>
    );
}

export default CreateNew;
*/