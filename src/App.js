import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Body from "./components/Body/index";
import Footer from "./components/Footer/index";
function App() {
  return (
    <>
      <Router>
        <Navbar />
      </Router>
      <Body />
      <Footer />
    </>
  );
}

export default App;
