import React from 'react'
import {styled} from '@material-ui/core/styles'

const StyledTitle = styled('div')({
    color: 'black',
    textAlign: 'center',
    fontFamily: 'roboto, sans-serif',
    fontSize: 34,
    marginBottom: 14
})

export const Title = (props) => {
    return (
          <StyledTitle>{props.children}</StyledTitle>
    )
}