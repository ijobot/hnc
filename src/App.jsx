import React, { Component } from "react";
import Stories from "./components/Stories";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      //Starting state option for the API URL.  This should change depending on what is clicked in the header.
      callAPIURL: "/topstories",
    };
    this.setState = this.setState.bind(this);
    this.updateURL = this.updateURL.bind(this);
  }

  //Method to dynamically change the story feed.
  updateURL(url) {
    return this.setState(url);
  }

  render() {
    return (
      <BrowserRouter>
        <Header updateURL={this.updateURL} />
        <Stories callAPIURL={this.state.callAPIURL} />
        <Header updateURL={this.updateURL} />
      </BrowserRouter>
    );
  }
}

export default App;
