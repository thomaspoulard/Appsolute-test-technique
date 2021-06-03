import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    // Get all articles id from the uri
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(res => res.json())
      .then(articlesId => {
        const articlePromiseList = articlesId.slice(-10)
          .reverse()
          .map(articleId => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
              .then(res => res.json())
          });

        Promise.all(articlePromiseList)
          .then(articleList => {
            this.setState({
              isLoaded: true,
              articles: articleList
            })

          })
      });
  }

  render() {

    const { isLoaded, articles } = this.state;

    // While data fetched from the API is loading, displaying a loading message
    if (!isLoaded) {
      return <div>Data is loading....</div>;
    }

    // Executes once data from the API has been loaded
      return (
        <div className="App">
          Les données ont été chargées avec succès!

          <ul>
            {articles.map(article => (
              <li>{article.title}</li>
            ))}
          </ul>

        </div>
      );
    }
}

export default App;
