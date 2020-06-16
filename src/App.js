import React, { useState } from "react";

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

export default function App() { // new feature2
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    background: {
      default: "#de1200",
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#de1200",
        light: "#7986cb",
        dark: "#303f9f",
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
        <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
        <Swc>
          <Route path="/" component={LandingPage} />
          <Route path="/aboutme" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/landingpage" component={LandingPage} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Swc>
      </ThemeProvider>
    </div>
  );
}
