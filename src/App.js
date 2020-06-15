import React from "react";

import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#00de00",
      },
      secondary: {
        main: "#ee4b4b",
      },
      background: {
        default: "#a0a0a5",
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <Switch>
          <Route path="/" component={LandingPage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}
