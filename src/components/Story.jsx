import React, { Component } from "react";

//Component for mapping 100 individual API calls to load 100 stories into the feed.  I chose 100 to limit the load time and number of requests to Firebase during the build.

class Story extends Component {
  constructor() {
    super();
    this.state = {
      storyData: [],
      isLoading: false,
    };
  }

  //This method mounts each individual story to the page by taking the storyId through props.  While loading, the message 'fetching data' is breifly displayed to the user to indicate background processes.
  componentDidMount() {
    this.setState({ isLoading: true });
    const singleStoryUrl = `https://hacker-news.firebaseio.com/v0/item/${this.props.storyId}.json`;
    fetch(singleStoryUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          storyData: data,
          isLoading: false,
        });
      });
  }

  //Each story is loaded with it's title being a clickable link.  I would like to add more functionality to the supplimental information, ie. make the author's name a clickable link to the user profile, change the Unix timestamp to a human-readable format, and make the 'hide' and 'comments' buttons functional.
  render() {
    const singleStory =
      this.state.isLoading || !this.state.storyData ? (
        "Fetching story..."
      ) : (
        <div className="post-block">
          <a href={this.state.storyData.url} className="link">
            <h4>{this.state.storyData.title}</h4>
          </a>
          <p className="text-gray">
            by {this.state.storyData.by} {this.state.storyData.time} | hide |
            comments
          </p>
        </div>
      );
    return singleStory;
  }
}

export default Story;
