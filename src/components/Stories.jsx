import React, { Component } from "react";
import Story from "./Story";
import Pagination from "./Pagination";
import callAPIs from "./../utils/callAPIs";

//Component for calling the Base API, which is the array of 500 story IDs.

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      rawStoryIds: [],
      storyFeedOption: callAPIs,
    };
  }

  componentDidMount() {
    fetch(`https://hacker-news.firebaseio.com/v0${this.props.callAPIURL}.json`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          rawStoryIds: data,
          pageSize: 10,
        });
      });
  }

  //This method needs more work to be made fully functional.  Should load 100 stories upon full page load, and then compartmentalize 10 stories each onto 10 pages to be flipped through by the user.
  handlePageChange = (page) => {
    console.log(page);
  };

  render() {
    return (
      <div className="container bg-tan">
        {this.state.rawStoryIds.slice(0, 100).map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
        <Pagination
          itemsCount={100}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Stories;
