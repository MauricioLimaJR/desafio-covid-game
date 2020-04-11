import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'
// Images
import Logo from '../../../static/images/logo.svg'

const MainContainer = styled(Grid)`
  height: 100%;
`

const Description = styled.span`
  color: ${colors.athensGray};
`

const ResumeSection = ({ start }) => {

  return (
    <MainContainer container alignContent='center'>
      <Grid item xs={12}>
        <img src={Logo} alt='Desafio Covid' />
      </Grid>

      <Grid item xs={12}>
        <Description>
          <p>O jogo que ajuda você a combater o Novo Coronavírus e qualquer fakenews.</p>
          <b>É hora de disseminar bons hábitos.</b>
        </Description>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        {/* <Link to="/jogos"> */}
          <Button color="primary" onClick={start}>
            Jogar Agora
          </Button>
        {/* </Link> */}
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Link to="#rules">
          <Button color="secondary">
            Como Jogar
          </Button>
        </Link>
      </Grid>
    </MainContainer>
  )
}

export default ResumeSection
