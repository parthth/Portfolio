import React from 'react';
import './App.css';
import Home from './components/home.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./components/resume.js";
import {Route} from "react-router-dom";
import Portfolio from './components/portfolio';
import Contacts from "./components/contacts"

function App() {
  return (
    <>
    <CssBaseline />
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contacts" component={Contacts} />
    </>
  );
}

export default App;
