import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'
import Game from '../../../static/images/game.svg'
import Book from '../../../static/images/book.svg'
import Award from '../../../static/images/award.svg'

const MainContainer = styled(Grid)`
  height: 100%;
  text-align: center;
`

const Rule = styled(Grid)`
  padding: 5px;
`

const Title = styled.h1`
  color: ${colors.white};
`

const Description = styled.span`
  color: ${colors.athensGray};
`

const RulesSection = () => {
  return (
    <MainContainer
      id="rules"
      container
      alignContent='flex-start'
    >
      <Grid item xs={12}>
        <Title>O jogo é simples!</Title>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'left' }}>
        <Rule container direction="row" alignContent="flex-start">
          {}
          <Grid item xs>
            <Description>
              Responda <b>corretamente</b> as questões, que envolvem tópicos importantes sobre o <b>coranavírus</b> e como combatê-lo.
            </Description>
          </Grid>
          <Grid item xs={3}>
            <img height={100} src={Game}></img>
          </Grid>
        </Rule>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'right' }}>
        <Rule container direction="row" alignContent="flex-end"
        >
          <Grid item xs={2}>
            <img height={100} src={Book}></img>
          </Grid>
          <Grid item xs>
            <Description>
              O objetivo é <b>acertar o maior número de respostas</b> no menor tempo possível. Além de elimar suas dúvidas sobre a pandemia.
            </Description>
          </Grid>
        </Rule>
      </Grid>

      <Grid item xs={12} style={{ textAlign: 'left' }}>
        <Rule container direction="row" alignContent="flex-start"
        >
          <Grid item xs>
            <Description>
              As melhores pontuações, ganharão um <b>destaque</b> no nosso Painel dos Campeões e serão lembradas como as <b>melhores combatentes de fakenews do COVID-19 do Brasil.</b>
            </Description>
          </Grid>
          <Grid item xs={2}>
            <img height={100} src={Award}></img>
          </Grid>
        </Rule>
      </Grid>

      <Grid item xs={12} style={{ marginTop: '1rem' }}>
        <Button color='secondary'>
          JOGAR AGORA
        </Button>
      </Grid>
    </MainContainer>
  )
}

export default RulesSection
