import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

class App extends Component {
  render() {
    return (
      <>
        {/* <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div> */}
        <Nav></Nav>
        <Header></Header>
        <Footer></Footer>
      </>
    );
  }
}

export default App;
