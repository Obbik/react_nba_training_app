import React, { Component } from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link } from "react-router-dom";

import styles from "./newslist.css";
import {
  firebaseTeams,
  firebaseArticles,
  firebaseLooper,
} from "../../../firebase";

import Button from "../button/button";
import TeamName from "../teaminfo/teaminfo";

class NewsList extends Component {
  state = {
    teams: [],
    items: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  };

  componentDidMount() {
    this.request(this.state.start, this.state.end);
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      firebaseTeams.once("value").then((snapshot) => {
        const teams = firebaseLooper(snapshot);
        this.setState({
          teams,
        });
      });
    }
    firebaseArticles
      .orderByChild("id")
      .startAt(start)
      .endAt(end)
      .once("value")
      .then((snapshot) => {
        const articles = firebaseLooper(snapshot);
        this.setState({
          items: [...this.state.items, ...articles],
          start,
          end,
        });
      });
  };
  //   axios.get(`${URL}/articles?_start=${start}&_end=${end}`).then((res) => {
  //     this.setState({
  //       items: [...this.state.items, ...res.data],
  //       start,
  //       end,
  //     });
  //   });
  // };

  loadmore = () => {
    let end = this.state.end + this.state.amount;

    this.request(this.state.end +   1, end);
  };
  renderNews = (type) => {
    let template = null;

    switch (type) {
      case "card":
        template = this.state.items.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: styles.newsList_wrapper,
              enterActive: styles.newsList_wrapper_enter,
            }}
            timeout={500}
            key={i}
          >
            <div className={styles.newslist_item} key={i}>
              <Link to={`/articles/${item.id}`}>
                <TeamName
                  teams={this.state.teams}
                  team_id={item.team}
                  date={item.date}
                />
                <h2>{item.title}</h2>
              </Link>
            </div>
          </CSSTransition>
        ));
        break;
      default:
        template = null;
    }
    return template;
  };
  render() {
    return (
      <div>
        <TransitionGroup component="div" className="list">
          {this.renderNews(this.props.type)}
        </TransitionGroup>

        <Button
          type="loadmore"
          loadmore={() => this.loadmore()}
          text="Load More News"
        />
      </div>
    );
  }
}

export default NewsList;
