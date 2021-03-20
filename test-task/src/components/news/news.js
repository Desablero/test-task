import React from "react";

import "./news.css";

import SearchNews from "./searchNews";

export default class News extends React.Component {
  state = {};

  render() {
    return (
      <div className="news">
        <h1>News</h1>
        <div>
          <SearchNews />
        </div>
      </div>
    );
  }
}
