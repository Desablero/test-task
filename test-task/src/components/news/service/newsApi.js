export default class NewsAPI {
  async getNewsSearchList(searchValue) {
    const date = "2021-03-19";
    const myAPI = "4c78b1a37a7d4cb786381cc06d4f3a2c";
    const _baseAPI = `https://newsapi.org/v2/everything?q=${searchValue}&from=${date}&sortBy=popularity&apiKey=${myAPI}`;

    const content = await fetch(_baseAPI).then((response) => response.json());

    return content;
  }
}
