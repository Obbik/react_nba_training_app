import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/home";
import Layout from "./components/HOC/layout";

import NewsArticle from "./components/Articles/News/Post/index";

import VideoArticle from "./components/Articles/Videos/video/index";

class Routes extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/articles/:id" exact component={NewsArticle} />
          <Route path="/video/:id" exact component={VideoArticle} />
        </Switch>
      </Layout>
    );
  }
}

export default Routes;
