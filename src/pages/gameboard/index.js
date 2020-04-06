import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import ShowAnwsers from './components/ShowAnwsers'
// Others
import * as colors from '../../constants/colors'
import VirusImg from '../../static/images/virus.svg'

const BackgroundContainer = styled(Grid)`
  height: 100vh;
`

const GameContent = styled(Grid)`
  background-image: url(${VirusImg});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 140vh;
  height: 100vh;
  max-width: 700px !important;
`

const Question = styled.div`
  background-color: ${colors.white};
  border-radius: 0 0 20% 20%;
  color: ${colors.wedgewood};
  font-weight: bold;
  padding: 4rem;
`

const game = [
  {
    question: "Questão 1",
    alternatives: [
      { text: 'AAA' },
      { text: 'BBB', isAnwser: true },
      { text: 'CCC' },
      { text: 'DDD' }
    ],
    explanation: "This is the correct response 'cause...",
  },
  {
    question: "Questão 2",
    alternatives: [
      { text: 'AAA' },
      { text: 'BBB' },
      { text: 'CCC' },
      { text: 'DDD', isAnwser: true },
    ],
    explanation: "This is the correct response 'cause...",
  },
]

const Gameboard = () => {
  return (
    <BackgroundContainer
      container
      direction="row"
      justify="center"
      alignContent="flex-start"
    >
      <GameContent container direction="row">
        {/* Question */}
        <Grid item xs={12}>
          <Question>
            {game[0].question}
          </Question>
        </Grid>

        {/* Answer alternatives */}
        <Grid item xs={12}>
          <ShowAnwsers
            alternatives={game[0].alternatives}
            explanation={game[0].explanation}
            type={'line'}
          />
        </Grid>
      </GameContent>
    </BackgroundContainer>
  )
}

export default Gameboard
