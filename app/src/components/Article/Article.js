import React from 'react'
import { styled } from '@material-ui/core/styles'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import ScheduleIcon from '@material-ui/icons/Schedule'
import GradeIcon from '@material-ui/icons/Grade'
import { Separator } from '../Separator/Separator'

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

const Subtitles = styled(Content)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: 16
})

const StyledLink = styled('a')({
  color: 'black',
  textDecoration: 'none'
})

const StyledTitle = styled('div')({
  fontSize: 17,
  margin: '5px 15px 0 2px'
})

const AuthorSubtitle = styled(StyledTitle)({
  fontSize: 16,
  color: 'black'
})

const DateSubtitle = styled(StyledTitle)({
  fontSize: 14,
  color: 'black',
  opacity: '70%',
})

const RateSubtitle = styled(StyledTitle)({
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
          <Subtitles>

            <PermIdentityIcon fontSize={'small'}/>

            <AuthorSubtitle>
              {props.author}
            </AuthorSubtitle>

            <ScheduleIcon fontSize={'inherit'} />
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