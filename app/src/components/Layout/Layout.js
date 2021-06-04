import React from 'react'
import { styled } from '@material-ui/core/styles'

const Background = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: `#F36523`
})

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 50,
  width: 700,
  height: '100%'
})

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%'
})

export const Layout = (props) => {
  return (
    <Background>
      <Container>
        <img
          width={'700'}
          height={'250'}
          src='https://apifriends.com/wp-content/uploads/2018/08/hacker-news.jpg'
          alt='hacker news'
        />
        <Content>
          {props.children}
        </Content>
      </Container>
    </Background>
  )
}
