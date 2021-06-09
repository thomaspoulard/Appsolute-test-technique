import React from 'react'
import { styled } from '@material-ui/core/styles'
import './Layout.css'

const Background = styled('div')({
  display: 'grid',
  gridTemplateAreas:`
  "header"
  "content"
  `,
  backgroundColor: '#F6F6EF'
})

const StyledImage = styled('img')({
  display: 'block',
  margin: '0 auto',
  gridRow: 'header',
  width: '100%',
  maxWidth: '490px'
})

export const Layout = (props) => {
  return (
    <Background className={'background'}>
      <header>
      <StyledImage
        className={'background'}
        src="https://apifriends.com/wp-content/uploads/2018/08/hacker-news.jpg"
        alt="hacker news"
      />
      </header>
      {props.children}
    </Background>
  )
}
