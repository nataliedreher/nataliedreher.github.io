import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu } from 'semantic-ui-react'
import './App.css';
import About from "./components/About/About.jsx";
import Education from "./components/Education/Education.jsx";
import Main from "./components/Main/Main.jsx"
import Navbar from "./components/Nav/Nav.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import StickyHeader from 'react-sticky-header';
import 'react-sticky-header/styles.css';

function App() {
  return (
    <Router >
      <StickyHeader header={
        <Navbar />
      } />
      <Main />
      <About />
      <Education />
      <Portfolio />
      <Menu inverted>
        <Menu.Item
          icon="linkedin"
          content={
            <a href="https://www.linkedin.com/in/natalie-dreher-79683742" target="_blank" rel="noopener noreferrer">Natalie Dreher</a>
          }
        />
        <Menu.Item
          icon="github"
          content={
            <a href="https://github.com/natalied84"
              target="_blank" rel="noopener noreferrer">Github</a>}

        />
        <Menu.Item
          icon="mail"
          content={
            <a href='mailto:n-dreher@hotmail.com'>n-dreher@hotmail.com</a>
          }
        />
      </Menu>
    </Router>
  );
}

export default App;
