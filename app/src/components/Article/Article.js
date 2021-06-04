import React from 'react'
import {styled} from '@material-ui/core/styles'

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
  flexDirection: 'column'
})

const StyledTitle = styled('div')({
  fontSize: 16
})

const Subtitle = styled(StyledTitle)({
  fontSize: 14,
  color: 'green'
})

const Link = styled('a')({
  color: 'black',
  textDecoration: 'none'
})

export const Article = (props) => {
  return (
      <Container>
        <Content>
          <Link href={props.url}><StyledTitle>{props.children}</StyledTitle></Link>
          <Subtitle>{props.subtitle}</Subtitle>
          <br/>
        </Content>
      </Container>
  )
}