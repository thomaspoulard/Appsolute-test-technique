import React, { Component } from 'react';
import './App.css';

const articlesIdList = [];

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
  }

  render() {

    var { isLoaded, items } = this.state;

    // Select the last 10 id and push the values into a new array
    {items.slice(-10).reverse().forEach(articleId => {
      articlesIdList.push(articleId)
    })}

    console.log(articlesIdList);
    console.log("taille tableau : " + articlesIdList.length);

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
