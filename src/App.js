import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch as Swc, Route } from "react-router-dom";

import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  outlinedRoot: {
    '&:hover $notchedOutline': {
      borderColor: 'green',
    },
  },
  notchedOutline: {
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

export default function App() {
  const classes = useStyles();
  const InputProps = {
    classes: {
      root: classes.outlinedRoot,
      notchedOutline: classes.notchedOutline,
    },
  };
  return (
    <TextField
      id="outlined-name"
      label="Name"
      className={classes.textField}
      margin="normal"
      variant="outlined"
      InputProps={InputProps}
      />
  );
}
