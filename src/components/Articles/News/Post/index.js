import React, { Component } from "react";
import axios from "axios";
import { URL } from "../../../../config";

import styles from "../../articles.css";
import { render } from "react-dom";

import Header from "./header";

class NewsArticles extends Component {
  state = {
    article: [],
    team: [],
  };

  componentDidMount() {
    axios
      .get(`${URL}/articles?id=${this.props.match.params.id}`)
      .then((res) => {
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
    console.log(article.image);
    return (
      <div className={styles.articleWrapper}>
        <Header Team={team[0]} author={article.author} date={article.date} />
        <div className={styles.articleBody}>
          <h1>{article.title}</h1>
          <div
            className={styles.articleImage}
            style={{
              background: `url(/images/articles/${article.image})`,
            }}
          ></div>
          <div className={styles.articleText}>{article.body}</div>
        </div>
      </div>
    );
  }
}

export default NewsArticles;
