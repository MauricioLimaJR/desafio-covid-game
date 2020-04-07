import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'

const MainContainer = styled(Grid)`
  height: 100vh;
  text-align: center;
  scroll-behavior: smooth;
`

const Title = styled.h1`
  color: ${colors.white};
`

const Description = styled.span`
  color: ${colors.athensGray};
`

const ResumeSection = () => {
  const history = useHistory()

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
        <Button onClick={() => history.push('/jogar')}>
          JOGAR AGORA
        </Button>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Link to="#rules">
          <Button color="secondary">
            COMO JOGAR
          </Button>
        </Link>
      </Grid>
    </MainContainer>
  )
}

export default ResumeSection
