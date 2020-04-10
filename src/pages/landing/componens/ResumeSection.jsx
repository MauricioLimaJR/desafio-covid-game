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
  height: 100%;
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
    <MainContainer container alignContent='center'>
      <Grid item xs={12}>
        <Title>DESAVIO COVID-19</Title>
      </Grid>

      <Grid item xs={12}>
        <Description>
          <p>O jogo que ajuda você a combater o Novo Coronavírus e qualquer fakenews.</p>
          <b>É hora de disseminar bons hábitos.</b>
        </Description>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Link to="/jogos">
          <Button color="primary">
            JOGAR AGORA
          </Button>
        </Link>
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
