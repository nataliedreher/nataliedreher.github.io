import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, Container } from 'semantic-ui-react'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import './App.css';
import About from "./components/About/About.jsx";
import Education from "./components/Education/Education.jsx";
// import Main from "./components/Main/Main.jsx"
import Navbar from "./components/Nav/Nav.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import StickyHeader from 'react-sticky-header';
import Skills from "./components/Skills/Skills.jsx"
import 'react-sticky-header/styles.css';

class App extends Component {
  state = { activeItem: "Home" }

  receiveActiveChange = active => {
    this.setState({ activeItem: active });

    active === "home" ? this.scrollToTop() : this.scrollTo();


  }


  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  render() {
    return (
      <>
        <StickyHeader header={

          <Navbar receiveActiveChange={this.receiveActiveChange} />

        } />


        <div id="h1-wrapper">
          <h1>Natalie Dreher</h1>
        </div>

        <Container fluid className="main-section">
          <Element name="aboutMe" className="element" >
            <About />
          </Element>
          <Element name="skills" className="element" >
          <Skills />
          </Element>
          <Element name="education" className="element" >
          <Education />
          </Element>
          <Element name="portfolio" className="element" >
          <Portfolio />
          </Element>
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
        </Container>
      </>
    );
  }
}

export default App;
