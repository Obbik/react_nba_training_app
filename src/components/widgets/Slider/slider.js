import React, { Component } from "react";
import { firebaseArticles, firebaseLooper } from "../../../firebase";

import Slidertemplate from "./slidertemplates";

class Slider extends Component {
  state = {
    news: [],
  };

  componentWillMount() {
    firebaseArticles
      .limitToFirst(3)
      .once("value")
      .then((snapshot) => {
        const news = [];
        snapshot.forEach((childSnapshot) => {
          news.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
          });
        });

        this.setState({
          news,
        });
      });

    // axios.get(`${URL}/articles?_start=0&_end=3`).then((res) => {
    //   this.setState({
    //     news: res.data,
    //   });
    // });
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
