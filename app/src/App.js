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

  // Récupérer les données en json avec l'url, on les stocke dans la var ''items''
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

    {items.slice(-10).reverse().forEach(articleId => {
      articlesIdList.push(articleId)
    })}

    console.log(articlesIdList);
    console.log("taille tableau : " + articlesIdList.length);

    // RETOUR AFFICHAGE

    // Tant que les données du fetch ne peuvent pas s'afficher, on affiche un message de chargement
    if (!isLoaded) {
      return <div>Data is loading....</div>;
    }

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
