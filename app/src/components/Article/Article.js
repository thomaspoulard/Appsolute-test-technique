import React from 'react'
import { styled } from '@material-ui/core/styles'

const Container = styled('div')({
  display: 'flex',
  fontFamily: 'roboto, sans-serif',
  background: 'lightblue'
})

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 0 0 10px'
})

const TitleLink = styled('a')({
  color: 'black',
  textDecoration: 'none'
})

const Subtitles = styled(Content)({
  display: 'flex',
  flexDirection: 'row'
})

const StyledTitle = styled('div')({
  fontSize: 16,
})

const AuthorSubtitle = styled(StyledTitle)({
  fontSize: 15,
  color: 'black'
})

const DateSubtitle = styled(StyledTitle)({
  fontSize: 13,
  color: 'black',
  opacity: '70%',
})

const RateSubtitle = styled(StyledTitle)({
  fontSize: 13,
  color: 'dark',
  opacity: '70%',
  fontWeight: 'bold',
})

// Formatting UNIX time to a readable date value
const formatDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString('fr-FR')
}

/**
 * Displays a hacker news article with data (author, date, score if a top article..)
 * @param props
 * @returns {JSX.Element}
 */
export const Article = (props) => {
  return (
    <>
      <Container>
        <Content>
          <TitleLink href={props.url}><StyledTitle>{props.title}</StyledTitle></TitleLink>
          <Subtitles>
            <AuthorSubtitle>By : {props.author}</AuthorSubtitle>
            <DateSubtitle>Date : {formatDate(props.time)}</DateSubtitle>
            {props.isTopArticle &&
            <RateSubtitle>Score : {props.score}</RateSubtitle>
            }
          </Subtitles>
          <br/>
        </Content>
      </Container>
    </>
  )
}