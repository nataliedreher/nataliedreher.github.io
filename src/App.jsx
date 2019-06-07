import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react'
import { Element, animateScroll as scroll, scroller } from 'react-scroll';
import About from "./components/About/About.jsx";
import Education from "./components/Education/Education.jsx";
import Navbar from "./components/Nav/Nav.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import StickyHeader from 'react-sticky-header';
import Skills from "./components/Skills/Skills.jsx"
import "semantic-ui-css/semantic.min.css";
import 'react-sticky-header/styles.css';
import './App.css';

class App extends Component {
  state = { activeItem: "home" };

  receiveActiveChange = active => {
    this.setState({ activeItem: active });
    active === "home" ? this.scrollToTop() : this.scrollTo();
  };

  scrollToTop() {
    scroll.scrollToTop();
  };

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  componentDidMount() {
    let about = document.querySelector('#aboutMe');
    let skills = document.querySelector('#skills');
    let education = document.querySelector('#education');
    let portfolio = document.querySelector('#portfolio');
    const elArray = [about, skills, education, portfolio];
    const getElemDistance = elem => {
      let location = 0;
      if (elem.offsetParent) {
        do {
          location += elem.offsetTop;
          elem = elem.offsetParent;
        } while (elem);
      }
      return location >= 0 ? location : 0;
    };
    const locations = elArray.map(ids => getElemDistance(ids));
    const locationHandler = () => {
      if (window.pageYOffset < (locations[0] - 400)) {
        this.setState({ activeItem: "home"})
      } else if ((locations[0] - 400) < window.pageYOffset && window.pageYOffset < (locations[1] - 400)) {
        console.log(locations[1])
        this.setState({ activeItem: "aboutMe"})
      } else if ((locations[1] - 400) < window.pageYOffset && window.pageYOffset < (locations[2] - 400)) {
        this.setState({ activeItem: "skills"})
      } else if ((locations[2] - 400) < window.pageYOffset && window.pageYOffset < (locations[3] - 440)) {
        this.setState({ activeItem: "education"})
      } else {
        this.setState({ activeItem: "portfolio"})
      };


    }
    document.addEventListener("scroll", locationHandler);
  };

  render() { 
    return (
      <>
        <StickyHeader header={
          <Navbar appState={this.state.activeItem} receiveActiveChange={this.receiveActiveChange} />
        } />
        <div id="h1-wrapper">
          <h1>Natalie Dreher</h1>
        </div>
        <Container fluid id="main-section">
          <Element id="aboutMe" name="aboutMe" className="element" >
            <About />
          </Element>
          <Element id="skills" name="skills" className="element" >
            <Skills />
          </Element>
          <Element id="education" name="education" className="element" >
            <Education />
          </Element>
          <Element id="portfolio" name="portfolio" className="element" >
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
  };
};

export default App;
