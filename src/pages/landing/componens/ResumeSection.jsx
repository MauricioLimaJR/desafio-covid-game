import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'

const MainContainer = styled(Grid)`
  height: 100vh;
  text-align: center;
`

const Title = styled.h1`
  color: ${colors.white};
`

const Description = styled.span`
  color: ${colors.athensGray};
`

const ResumeSection = () => {

  return (
    <MainContainer
      container
      alignContent='center'
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
        <Button>
          JOGAR AGORA
        </Button>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Button color="secondary">
          COMO JOGAR
        </Button>
      </Grid>
    </MainContainer>
  )
}

export default ResumeSection