import React, { useEffect, useState } from 'react'

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
      Les données ont été chargées avec succès!

      <ul>
        {articles.map(article => (
          <li>{article.title}</li>
        ))}
      </ul>

    </div>
  )
}