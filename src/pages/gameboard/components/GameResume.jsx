import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Others
import * as colors from '../../../constants/colors'
import Award from '../../../static/images/award.svg'

const MainContainer = styled(Grid)`
  height: 100%;
  text-align: center;
`

const SubTitle = styled.p`
  color: ${colors.white};
  margin: 5px;
`

const Title = styled(SubTitle)`
  font-size: 1.5rem;
`

const GameResume = ({

}) => {

  return (
    <MainContainer
      container
      alignContent="center"
      justify="center"
    >
      <Grid item xs={12}>
        <img src={Award} alt='awrd' />
      </Grid>
      <Grid item xs={12}>
        <Title>Parabéns</Title>
      </Grid>
      <Grid item xs={12}>
        <SubTitle>Quanto mais estivermos concientes e em união, mais rápido esse pandemia terminará.</SubTitle>
      </Grid>
    </MainContainer>
  )
}

export default GameResume
