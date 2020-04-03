import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Button, Grid } from '@material-ui/core'
// Custom Settings
import * as colors from '../../constants/colors'
import skyBackground from '../../static/images/background.png'
import ruleOne from '../../static/images/rule-one.svg'

const MainContainer = styled(Grid)`
  background-image: url(${skyBackground});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  /* padding: 2vh; */
`

const Title = styled.h1`
  color: ${colors.white};
`

const Description = styled.span`
  color: ${colors.athensGray};
`

const Landing = () => {
  return (
    <MainContainer
      container
      alignContent='flex-start'
      justify='center'
      direction='row'
    >
      <Grid item xs={12}>
        <Title>JOGÃO LEGALZÃO</Title>
      </Grid>

      <Grid item xs={12}>
        <Description>
          <p>O jogo que ajuda você a combater o Novo Coronavírus e qualquer fakenews.</p>
          <b>É hora de disseminar bons hábitos.</b>
        </Description>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Button
          variant='contained'
          color='secondary'
        >
          JOGAR AGORA
        </Button>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Button
          variant='contained'
          // color='secondary'
        >
          COMO JOGAR
        </Button>
      </Grid>
    </MainContainer>
  )
}

export default Landing
