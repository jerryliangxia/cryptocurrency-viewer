import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { Layout, Typography, Space, Menu } from "antd";

import { Navbar } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
