import React, { Component } from 'react';
import './App.css';

let articleId;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articlesIdList: [],
      article: [],
      isLoaded: false
    }
  }

  componentDidMount() {

    // Get all articles id from the uri
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          articlesIdList: json
        })
      });

      fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          article: json
        })
      });
  }

  render() {

    let { isLoaded, articlesIdList } = this.state;


    // Select the last 10 id and push the values into a new array
    {articlesIdList.slice(-10).reverse().forEach(currentArticleId => {
      articleId = currentArticleId;
    })}

    // RETOUR AFFICHAGE

    // While data fetched from the API is loading, displaying a loading message
    if (!isLoaded) {
      return <div>Data is loading....</div>;
    }

    // Executes once data from the API has been loaded
    else {
      return (
        <div className="App">
          Les données ont été chargées avec succès!
        <br/>
        <br/>
          <div>{articleId}</div>
        </div>
      );
    }
  }
}

export default App;
