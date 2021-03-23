import React from "react";

import "./news.css";

import SearchNews from "./search-news/searchNews";

export default class News extends React.Component {
  state = {};

  render() {
    return (
      <div className="news">
        <div className="news__wrapper">
          <div className="search__news-com">
            <SearchNews />
          </div>
        </div>
      </div>
    );
  }
}
