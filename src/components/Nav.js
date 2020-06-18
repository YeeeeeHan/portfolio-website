import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Typography } from "@material-ui/core";

import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: (props) => {
    return {
      background: props.darkMode ? "#242424" : theme.palette.primary,
    };
  },
  IconButtonStyle: {
    color: "#CCCCCC",
  },
}));

export default function Nav(props) {
  console.log("from Navbar theme", props.theme);
  const classes = useStyles(props);

  return (
    <AppBar position="static" className={classes.paper}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Link to="/resume">
          <IconButton aria-label="Resume" color="inherit">
            <Brightness7Icon />
          </IconButton>
        </Link>
        {props.darkMode ? (
          <Tooltip title="Toggle Light Mode">
            <IconButton
              aria-label="toggle-darkMode"
              onClick={() => props.setDarkMode(!props.darkMode)}
              color="inherit"
            >
              <Brightness7Icon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Toggle Dark Mode">
            <IconButton
              aria-label="toggle-darkMode"
              onClick={() => props.setDarkMode(!props.darkMode)}
              color="inherit"
            >
              <Brightness4Icon />
            </IconButton>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
}
