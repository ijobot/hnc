import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  //Method for selecting the story feed based on which option is clicked in the nav menu.
  //still needs work to make functional.
  handleStoryFeedSelect = (storyFeedOption) => {
    return () => this.props.updateURL({ callAPIURL: storyFeedOption });
  };

  //First instances of classNames in this component.  I originally wanted to use Bootstrap, but I've only worked with their preconfigured settings before.  I decided to use the built-in CSS sheet to configure my own designs instead.
  render() {
    return (
      <nav>
        <div className="header-menu flex-row container bg-orange">
          <p className="logo">Hacker News</p>
          <div className="sub-menu flex-row">
            <NavLink
              to="/newstories"
              className="link"
              //This onClick should allow the user to select a new story feed to load in the Stories component, but I had difficulty getting it to work.
              onClick={this.handleStoryFeedSelect("newStories")}
            >
              Newest
            </NavLink>
            <NavLink
              to="/topstories"
              className="link"
              onClick={this.handleStoryFeedSelect("topStories")}
            >
              Top
            </NavLink>
            <NavLink
              to="/beststories"
              className="link"
              onClick={this.handleStoryFeedSelect("bestStories")}
            >
              Best
            </NavLink>
          </div>
          <div className="sub-menu flex-row">
            <NavLink
              to="/askstories"
              className="link"
              onClick={this.handleStoryFeedSelect("askStories")}
            >
              Ask
            </NavLink>
            <NavLink
              to="/showstories"
              className="link"
              onClick={this.handleStoryFeedSelect("showStories")}
            >
              Show
            </NavLink>
            <NavLink
              to="/jobstories"
              className="link"
              onClick={this.handleStoryFeedSelect("jobStories")}
            >
              Jobs
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
