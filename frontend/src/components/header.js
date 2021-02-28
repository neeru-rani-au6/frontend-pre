import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

class Header extends Component {
  render() {
    return (
      <div className="root">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className="meanButton"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="title" variant="h6">
              Books
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
