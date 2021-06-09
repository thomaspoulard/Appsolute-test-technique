import React from 'react'
import { Article } from '../Article/Article'
import { styled } from '@material-ui/core/styles'

const StyledArticleList = styled('div')({
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.14), 0 3px 4px rgba(0, 0, 0, 0.12), 0 1px 5px rgba(0, 0, 0, 0.2)'
})

export const ArticleList = ({ articles, isTopArticle }) => {
  return (
    <StyledArticleList>
      {articles.map(article => (
        <Article isTopArticle={isTopArticle} title={article.title} author={article.by} url={article.url}
                 time={article.time} score={article.score}/>
      ))}
    </StyledArticleList>
  )
}


