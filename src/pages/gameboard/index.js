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
  border-bottom: solid 3px ${colors.smoky};
  border-radius: 0 0 100% 100%;
  color: ${colors.smoky};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 2rem 2rem 3rem;
`

const game = [
  {
    question: "Quais dessas opções é a mais eficaz para impedir a disseminação do Coronavírus no Brasil?",
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
  const questions = game
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)

  const nextQuestion = () => {
    if ((currentQuestionIndex + 1) < questions.length) {
      return setCurrentQuestionIndex(v => v + 1)
    }
    alert('fim do jogo')
  }

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
            {questions[currentQuestionIndex].question}
          </Question>
        </Grid>

        {/* Answer alternatives */}
        <Grid item xs={12}>
          <ShowAnwsers
            alternatives={questions[currentQuestionIndex].alternatives}
            explanation={questions[currentQuestionIndex].explanation}
            type={'line'}
            handleCorrectResponse={nextQuestion}
          />
        </Grid>
      </GameContent>
    </BackgroundContainer>
  )
}

export default Gameboard
