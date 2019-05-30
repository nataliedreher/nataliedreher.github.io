import React from 'react';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Image, Menu } from 'semantic-ui-react'
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Main from "./pages/Main.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import BGImage from "./images/344_243_1558895986144635898004111912095(2).jpg"
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

function App() {
  return (
    <Router >
  <StickyHeader header={
      <Navbar />
    } />
    

      <Image src={BGImage} style={{ marginTop: 0 }} />
      <About />
      <Main />
      <Portfolio />

      {/* <Switch>
        <Route exact path='/' component={About} /> */}
        {/* Will use this later upon refactor <Route exact path='/about' component={About} /> */}
        {/* <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch> */}
      <Contact />
      <Menu inverted>
        <Menu.Item name='home' />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
      </Menu>
    </Router>
  );
}

export default App;
