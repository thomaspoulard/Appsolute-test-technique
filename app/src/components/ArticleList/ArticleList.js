import React, { useEffect, useState } from 'react'
import { Article } from '../Article/Article'

export const ArticleList = () => {

  // useState hooks to manage states in the app
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Formatting UNIX time to a readable date value
  function formatTime(s) {
    const dtFormat = new Intl.DateTimeFormat('fr-FR', {
      timeStyle: 'medium',
      timeZone: 'UTC'
    });
    return dtFormat.format(new Date(s * 1e3));
  }

  // UseEffect is called the first time the page is loaded, and everytime its dependencies are updated
  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json') // fetch all articleId
      .then(res => res.json())
      .then(articlesId => {
        const articlePromiseList = articlesId.slice(-10) // Get last 10 articles
          .reverse()
          .map(articleId => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`) // fetch 1 article with articleId as a variable
              .then(res => res.json())
          })

        // Executes the promises in articlePromiseList
        Promise.all(articlePromiseList)
          .then(articleList => {
            setArticles(articleList)
            setIsLoading(false)
          })
      })
  }, []);

  // While data is loading, displays a loading message
  if (isLoading) {
    return (
      <div>Data is loading....</div>
    )
  }

  // Executes only if isLoading is false (data loaded)
  return (
    <div>
      <div>Latest news!</div>
      <br/>
      {articles.map(article => (
        <Article subtitle={article.by} url={article.url} time={formatTime(article.time)}>{article.title}</Article>
      ))}
    </div>
  )
}