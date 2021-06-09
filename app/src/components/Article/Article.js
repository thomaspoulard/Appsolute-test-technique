import React from 'react'
import { styled } from '@material-ui/core/styles'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ScheduleIcon from '@material-ui/icons/Schedule'
import GradeIcon from '@material-ui/icons/Grade'
import { Separator } from '../Separator/Separator'

const Container = styled('div')({
  display: 'flex',
  fontFamily: 'roboto, sans-serif',
  background: 'white',
  textAlign: 'justify'
})

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 10px 0 10px'
})

const Paragraphe = styled('div')({})

const Subtitles = styled(Content)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: 16
})

const StyledLink = styled('a')({
  color: 'black',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
})

const StyledTitle = styled('div')({
  fontSize: 20,
  margin: '0 15px 8px 2px',
  fontWeight: 'bold'
})

const AuthorSubtitle = styled('div')({
  fontSize: 16,
  color: 'black',
  margin: '0 15px 0 2px',
  fontWeight: 'normal'
})

const DateSubtitle = styled(AuthorSubtitle)({
  fontSize: 14,
  color: 'black',
  opacity: '70%',
  fontWeight: 'normal'
})

const RateSubtitle = styled(AuthorSubtitle)({
  fontSize: 14,
  color: 'dark',
  opacity: '90%',
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
          <StyledLink href={props.url}><StyledTitle>{props.title}</StyledTitle></StyledLink>

          <Paragraphe>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus, dui eu fermentum dignissim, enim justo
            consequat tellus, at bibendum leo libero et dui. Nam elementum lobortis tellus, in sagittis erat maximus
            sed. Nullam sapien sapien, malesuada et nunc feugiat, feugiat rutrum mauris.
          </Paragraphe>

          <Subtitles>
            <PermIdentityIcon fontSize={'small'}/>
            <AuthorSubtitle>
              By : {props.author}
            </AuthorSubtitle>

            <ScheduleIcon fontSize={'inherit'}/>
            <DateSubtitle>{formatDate(props.time)}</DateSubtitle>

            {props.isTopArticle &&
            <>
              <GradeIcon fontSize={'inherit'}/>
              <RateSubtitle>Score : {props.score}</RateSubtitle>
            </>
            }
          </Subtitles>

          <Separator/>

        </Content>
      </Container>
    </>
  )
}