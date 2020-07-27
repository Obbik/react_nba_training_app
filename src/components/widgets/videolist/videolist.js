import React, { Component } from "react";
import styles from "./videolist.css";

import axios from "axios";
import { URL } from "../../../config";
import Button from "../button/button";

import VideosLists from "./videoListTemplate";

class VideosList extends Component {
  state = {
    teams: [],
    videos: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  renderTitle = (title) => {
    return title ? <h3>NBA Videos</h3> : null;
  };

  loadMore = () => {
    let end = this.state;
  };
  renderButon = (loadmore) => {
    return loadmore ? (
      <Button
        type="loadmore"
        text="load more videos "
        loadmore={() => this.loadMore()}
      />
    ) : (
      <Button type="linkTo" text="more videos" linkTo="/videos" />
    );
  };

  componentDidMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios
        .get(`${URL}/teams`)

        .then((res) => {
          this.setState({ teams: res.data });
        });
    }
    axios.get(`${URL}/videos?_start=${start}&_end=${end}`).then((res) => {
      this.setState({
        videos: [...this.state.videos, ...res.data],
        start,
        end,
      });
    });
  };

  render() {
    return (
      <div className={styles.videolist_wrapper}>
        {" "}
        {this.renderTitle(this.props.title)}
        <VideosLists data={this.state.videos} teams={this.state.teams} />
        {this.renderButon(this.props.loadmore)}
      </div>
    );
  }
}
export default VideosList;
