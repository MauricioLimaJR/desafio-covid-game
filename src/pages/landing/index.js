import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
import img from '../../static/images/background.png'

const MainContainer = styled(Grid)`
  height: 100%;
  background-color: blue;
  background-image: url(${img});
  align-items: flex-start;
  display: flex;
  height: 80vh;
  justify-content: center;
  padding: 2vh;
  padding-top: 0;
  overflow-y: scroll;
  text-align: center;
`

const Landing = () => {
  return (
    <MainContainer container direction='column'>
      Ola
    </MainContainer>
  )
}

export default Landing
