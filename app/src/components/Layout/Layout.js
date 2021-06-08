import React from 'react'
import { styled } from '@material-ui/core/styles'

const Background = styled('div')({
  display: 'grid',
  gridTemplateRows: '[header-start] 200px [header-end content-start] auto [content-end]',
  background: '#F6F6EF',
})

const StyledImage = styled('img')({
  justifySelf: 'center',
  margin: '25px 0 0 0',
  gridRow: 'header-start / header-end'
})

export const Layout = (props) => {
  return (
    <Background>
        <StyledImage
          width={'490'}
          height={'175'}
          src='https://apifriends.com/wp-content/uploads/2018/08/hacker-news.jpg'
          alt='hacker news'
        />
        {props.children}
    </Background>
  )
}
