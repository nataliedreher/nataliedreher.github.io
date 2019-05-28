import React from 'react';
import "semantic-ui-css/semantic.min.css";
import './App.css';
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Main from "./pages/Main.jsx";
import Portfolio from "./pages/Portfolio.jsx";


function App() {
  return (
    <Router >
      <Navbar />
      <Switch>
        <Route exact path='/' component={About} />
        {/* Will use this later upon refactor <Route exact path='/about' component={About} /> */}
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/portfolio' component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
