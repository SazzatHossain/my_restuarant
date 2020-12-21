import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Body from "./components/Body/index";
import Footer from "./components/Footer/index";
// import Navigation from "./Navigation";
function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
}

export default App;
