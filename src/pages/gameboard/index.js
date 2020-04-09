import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import ShowQuestion from './components/ShowQuestion'
import GameResume from './components/GameResume'
// Others
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

const Gameboard = () => {
  const questions = game
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
  const [resumeGame, setResumeGame] = React.useState(false)

  const nextQuestion = () => {
    if ((currentQuestionIndex + 1) < questions.length) {
      return setCurrentQuestionIndex(v => v + 1)
    }
    setResumeGame(true)
  }

  return (
    <BackgroundContainer
      container
      direction="row"
      justify="center"
      alignContent="flex-start"
    >
      <GameContent container direction="row" data-playing={false}>
        <Grid item xs={12}>
          {
            resumeGame
              ? <GameResume />
              : <ShowQuestion
                question={questions[currentQuestionIndex]}
                questionIndex={currentQuestionIndex}
                gameLength={questions.length}
                handleCorrectResponse={nextQuestion}
              />
          }
        </Grid>
      </GameContent>
    </BackgroundContainer>
  )
}

export default Gameboard
