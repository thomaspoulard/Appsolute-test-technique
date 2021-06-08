import React from 'react'
import {styled} from '@material-ui/core/styles'

const StyledTitle = styled('div')({
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 34
})

export const Title = (props) => {
    return (
          <StyledTitle>{props.children}</StyledTitle>
    )
}