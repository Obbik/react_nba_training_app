import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../../config";

import styles from "../../articles.css";

import Header from "./header";

class Videoartikle extends Component {
  state = {
    article: [],
    team: [],
  };

  componentDidMount() {
    axios.get(`${URL}/videos?id=${this.props.match.params.id}`).then((res) => {
      let article = res.data[0];

      axios.get(`${URL}/teams?id=${article.team}`).then((res) => {
        this.setState({
          article,
          team: res.data,
        });
      });
    });
  }

  render() {
    const article = this.state.article;
    const team = this.state.team;
    return (
      <div>
        <Header TeamData={team[0]} />
        baba
      </div>
    );
  }
}
export default Videoartikle;
