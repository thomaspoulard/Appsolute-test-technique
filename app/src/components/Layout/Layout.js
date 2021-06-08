import React from 'react'
import { styled } from '@material-ui/core/styles'

const Background = styled('div')({
  display: 'grid',
  gridTemplateRows: '[header-start] 200px [header-end content-start] auto [content-end]',
  background: 'white',
  margin: '0 50px 0 50px'
})

export const Layout = (props) => {
  return (
    <Background>
        <img
          width={'490'}
          height={'175'}
          src='https://apifriends.com/wp-content/uploads/2018/08/hacker-news.jpg'
          alt='hacker news'
        />
        {props.children}
    </Background>
  )
}
