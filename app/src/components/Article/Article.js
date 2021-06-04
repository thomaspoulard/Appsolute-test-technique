import React from 'react'
import { styled } from '@material-ui/core/styles'

const Container = styled('div')({
  display: 'flex',
  fontFamily: 'roboto, sans-serif',
  cursor: 'pointer',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#F6F6EF'
})

const Content = styled('div')({
  display: 'flex',
  flexGrow: 1,
  flexDirection: 'column',
  padding: '5px 0 0 10px'
})

const Subtitles = styled(Content)({
  display: 'flex',
  flexGrow: 2,
  flexDirection: 'row'
})

const StyledTitle = styled('div')({
  fontSize: 16,
})

const AuthorSubtitle = styled(StyledTitle)({
  fontSize: 15,
  color: 'black',
  marginRight: 20
})

const DateSubtitle = styled(StyledTitle)({
  fontSize: 13,
  color: 'black',
  opacity: '70%'
})

const Link = styled('a')({
  color: 'black',
  textDecoration: 'none'
})

export const Article = (props) => {
  return (
    <>
      <Container>
        <Content>
          <Link href={props.url}><StyledTitle>{props.children}</StyledTitle></Link>
          <Subtitles>
            <AuthorSubtitle>By : {props.subtitle}</AuthorSubtitle>
            <DateSubtitle>Date : {props.time}</DateSubtitle>
          </Subtitles>
          <br/>
        </Content>
      </Container>
    </>
)
}