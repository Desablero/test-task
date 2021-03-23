import React from "react";
import NewsAPI from "../service/newsApi";

import "./searchNews.css";

export default class SearchNews extends React.Component {
  newsApi = new NewsAPI();

  state = {
    listNews: [],
    typingInput: "",
    lastSearch: "",
  };

  onChangeinput(event) {
    const input = event.target.value;
    this.setState({ typingInput: input });
  }

  // Ищем новость по запросу
  onSearchNew(value) {
    this.newsApi.getNewsSearchList(value).then((res) => {
      // Создаём массив, где каждую статью и её url будем записывать в подмассив
      const newsList = [];
      res.articles.forEach((article) => {
        let element = [article.title, article.url];
        newsList.push(element);
      });
      this.setState(({ listNews }) => {
        return {
          listNews: newsList,
        };
      });
    });
  }

  render() {
    const { listNews, typingInput } = this.state;

    const onSubmit = (event) => {
      // Не перезагружаем страницу после сабмита
      event.preventDefault();

      // Вызываем функцию поиска новостей с введённым запросом
      this.onSearchNew(typingInput);

      // Очищаем поле input после завершения поиска новосткей
      this.setState({ typingInput: "" });
    };

    // Выводим список запрашиваемых новстей
    const newsLines = listNews.map((el) => {
      // Генерируем id новости из списка новостей (чтобы не ругалось на отстуствие key для рендера V.DOM)
      const newsID = `f${(~~(Math.random() * 1e8)).toString(16)}`;
      return (
        <div key={newsID}>
          <a className="news__list-link" href={el[1]}>
            <span>{el[0]}</span>
          </a>
          <br />
        </div>
      );
    });

    return (
      <div>
        <div className="search-news">
          <form className="search-news-form" onSubmit={onSubmit}>
            <div className="search-news-input">
              <input
                placeholder="Type to search news"
                type="text"
                onChange={this.onChangeinput.bind(this)}
                value={typingInput}
              />
            </div>
          </form>
        </div>
        <br />
        <div className="news__list">
          <br />
          <br />
          {newsLines}
        </div>
      </div>
    );
  }
}
