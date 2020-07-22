import React, { Component } from "react";

import axios from "axios";

import Slidertemplate from "./slidertemplates";

class Slider extends Component {
  state = {
    news: [],
  };

  componentWillMount() {
    axios.get("http://localhost:3004/articles?_start=0&_end=3").then((res) => {
      this.setState({
        news: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <Slidertemplate news={this.state.news} type="bad" />
      </div>
    );
  }
}

export default Slider;
