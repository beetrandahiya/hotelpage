import "./App.css";
import React from "react";
import ReactDOM from "react-dom";

import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <ResaContainer />
      <Body />
      <Footer />
    </div>
  );
}


function ResaContainer() {
  return (
    <div className="resa-container">
      <div className="resa-container-item">
        <div className="resa-container-item-title">
          <h1>RESERVEZ UNE TABLE</h1>
        </div>
        <div className="resa-container-item-content"></div>
      </div>
    </div>
  );
}

export default App;
