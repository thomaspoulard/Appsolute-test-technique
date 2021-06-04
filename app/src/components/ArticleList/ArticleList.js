import React, { useEffect, useState } from 'react'
import { Article } from '../Article/Article'

function Format_Time(s) {
  const dtFormat = new Intl.DateTimeFormat('fr-FR', {
    timeStyle: 'medium',
    timeZone: 'UTC'
  });

  return dtFormat.format(new Date(s * 1e3));
}

export const ArticleList = () => {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
      .then(res => res.json())
      .then(articlesId => {
        const articlePromiseList = articlesId.slice(-10)
          .reverse()
          .map(articleId => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
              .then(res => res.json())
          })

        Promise.all(articlePromiseList)
          .then(articleList => {
            setArticles(articleList)
            setIsLoading(false)
          })
      })

  }, []);

  if (isLoading) {
    return (
      <div>Data is loading....</div>
    )
  }

  return (
    <div>
      Les données ont été chargées avec succès!<br/>

      {articles.map(article => (
        <Article subtitle={article.by} url={article.url} time={Format_Time(article.time)}>{article.title}</Article>
      ))}

    </div>
  )
}