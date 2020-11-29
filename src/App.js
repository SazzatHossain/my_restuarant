import React from 'react'
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Body from './components/Body/index'

function App() {
  return (
    <Router>
        <Navbar />
        <Body />
    </Router>
  );
}

export default App;
