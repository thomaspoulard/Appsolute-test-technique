import React, { useEffect, useState } from 'react'
import { styled } from '@material-ui/core/styles'
import { Article } from '../Article/Article'
import { Title } from '../Title/Title'

const Content = styled('div')({
  display: 'grid',
  gridTemplateColumns: '[new-stories-start] auto [new-stories-end top-stories-start] auto [top-stories-end]',
  columnGap: '25%',
  margin: '50px 15% 0 15%'
})

const NewStoriesContainer = styled('div')({
  gridColumn: 'new-stories-start / new-stories-end'
})

const TopStoriesContainer = styled('div')({
  gridColumn: 'top-stories-start / top-stories-end'
})

export const ArticleList = () => {

  // useState hooks to manage states in the app
  const [articles, setArticles] = useState([])
  const [topArticles, setTopArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // UseEffect is called the first time the page is loaded, and everytime its dependencies are updated
  // This portion of code fetches the 10 latest articles from hacker-news
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

    // fetch last 3 top articles
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty') // fetch top article
      .then(res => res.json())
      .then(topArticlesId => {
        const topArticlePromiseList = topArticlesId.slice(-3) // Get latest 3 top articles
          .reverse()
          .map(topArticleId => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${topArticleId}.json`) // fetch 1 top article with articleId as a variable
              .then(res => res.json())
          })

        // Executes the promises in articlePromiseList
        Promise.all(topArticlePromiseList)
          .then(topArticleList => {
            setTopArticles(topArticleList)
            setIsLoading(false)
          })
      })
  }, [])

  // While data is loading, displays a loading message
  if (isLoading) {
    return (
      <div>Data is loading....</div>
    )
  }

  // Executes only if isLoading is false (data loaded)
  return (
    <Content>

      <NewStoriesContainer>
        <Title>Latest news!</Title>
        <br/>
        {articles.map(article => (
          <Article title={article.title} author={article.by} url={article.url} time={article.time}/>
        ))}
      </NewStoriesContainer>

      <TopStoriesContainer>
        <Title>Top news!</Title>
        <br/>
        {topArticles.map(topArticle => (
          <Article isTopArticle title={topArticle.title} author={topArticle.by} url={topArticle.url}
                   time={topArticle.time} score={topArticle.score}/>
        ))}
      </TopStoriesContainer>

    </Content>
  )
}