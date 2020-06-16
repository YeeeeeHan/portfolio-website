import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Tooltip, Typography } from "@material-ui/core";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Nav({ darkMode, setDarkMode }) {
  const classes = useStyles();

  return (
    <AppBar position="static" color='inherit'>
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
        <Tooltip title="toggle-darkMode">
          <IconButton
            aria-label="toggle-darkMode"
            onClick={() => setDarkMode(!darkMode)}
            color="inherit"
          >
            <Brightness4Icon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
