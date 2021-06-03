import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articlesIdList: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          articlesIdList: json
        })
      });
  }

  render() {

    let { isLoaded, articlesIdList } = this.state;

    // Select the last 10 id of the whole articlesIdList
    {articlesIdList.slice(-10).reverse().map(articleId => {
      let articleUri = `https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`;

      console.log(articleUri);

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
          </div>
      );
    }
  }
}

export default App;
