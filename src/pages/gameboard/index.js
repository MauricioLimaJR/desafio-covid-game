import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid, Divider } from '@material-ui/core'
// Custom components
import ShowAnwsers from './components/ShowAnwsers'
// Others
import * as colors from '../../constants/colors'
import game from '../../static/locale/firstgame'
import VirusImg from '../../static/images/virus.svg'

const BackgroundContainer = styled(Grid)`
  height: 100%;
`

const GameContent = styled(Grid)`
  background-image: url(${VirusImg});
  background-repeat: no-repeat;
  background-position: 100% 0%;
  background-size: 140vh;
  height: 100%;
  max-width: 700px !important;
`

const Question = styled.div`
  background-color: ${colors.white};
  border-bottom: solid 3px ${colors.smoky};
  border-radius: 0 0 100% 100%;
  color: ${colors.smoky};
  font-weight: bold;
  padding: 5px 1rem 2rem;

  p {
    padding: 0;
    margin: 0;
  }
  .progress {
    color: ${colors.razzmatazzPink};
    font-weight: normal;
    margin-bottom: 5px;
  }
  .current {
    font-size: 1.2rem;
    font-weight: bold;
  }
`

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
          <Divider variant='middle'/>

          <Question>
            <p className='progress'>
              <span className='current'>{currentQuestionIndex + 1}</span>{`ª de ${questions.length}`}
            </p>
            <p>{questions[currentQuestionIndex].question}</p>
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
