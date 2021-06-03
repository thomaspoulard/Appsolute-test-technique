import React from 'react'
import { styled } from '@material-ui/core/styles'

const Background = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  background: `lightblue`
})

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: 50,
  width: 375,
  height: 550
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
        <Content>
          {props.children}
        </Content>
      </Container>
    </Background>
  )
}
