import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import ShowQuestion from './components/ShowQuestion'
import GameResume from './components/GameResume'
// Others
import * as colors from '../../constants/colors'
import {
  getGameStart,
  getPausedGameTime,
  getMatchMistakes,
  setMatchMistakes } from '../../lib/persistence'
import { getGame, shuffleAlternatives} from '../../lib/gameSelector'
import { shuffle } from '../../lib/utils'

const BackgroundContainer = styled(Grid)`
  background: linear-gradient(
    ${colors.concrete},
    ${colors.lividBrown}
  );
  height: 100%;
`

const GameContent = styled(Grid)`
  height: 100%;
  max-width: 700px !important;
`

const GameData = styled(Grid)`
  background-color: ${colors.white};
  color: ${colors.razzmatazzPink};
  height: min-content;
  padding: 5px;

  p {
    margin: 0;
  }
`

const twoDigitsParser = time => time >= 10 ? `${time}` : `0${time}`

const timeUp = (start, saveTime) => {
  const gameTime = parseInt(start) + parseInt(getPausedGameTime())
  const currentMoment = new Date(Date.now() - gameTime)

  const minutes = twoDigitsParser(currentMoment.getMinutes())
  const seconds = twoDigitsParser(currentMoment.getSeconds())

  const timeToString = `${minutes}:${seconds}`
  saveTime(timeToString)
}

const Gameboard = () => {
  // Query Param
  const query = new URLSearchParams(useLocation().search)
  const { id } = query.get('id')

  // Game Data
  const [startGameTime] = React.useState(getGameStart())
  const [playingTime, setPlayingTime] = React.useState('00:00')
  const [mistakes, setMistakes] = React.useState(getMatchMistakes())

  // Time up event handlers
  const [timeSnapshot, setTimeSnapshot] = React.useState(null)
  const [intervalID, setIntervalID] = React.useState(false)
  const timeCounter = () => setInterval(() => timeUp(startGameTime, setPlayingTime), 1000)
  React.useEffect(() => {
    setIntervalID(timeCounter())
  }, [1])

  // Game Uuestions
  const game = getGame(id)
  // const [questions] = React.useState(shuffle(game.questions)

  const [questions, setQuestionsShuffled] = React.useState(shuffle(game.questions))

  React.useEffect(() => {
    setQuestionsShuffled(shuffleAlternatives(questions))
  }, [id])
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0)
  const [resumeGame, setResumeGame] = React.useState(false)

  const nextQuestion = () => {
    if ((currentQuestionIndex + 1) < questions.length) {
      return setCurrentQuestionIndex(v => v + 1)
    }
    // Game End
    clearInterval(intervalID)
    setResumeGame(true)
  }

  return (
    <BackgroundContainer
      container
      direction="row"
      justify="center"
      alignContent="flex-start"
    >
      <GameContent container alignContent="flex-start" data-playing={false}>
        {
          !resumeGame ? (
            <Grid item xs={12} style={{ backgroundColor: 'white', height: 'min-content' }}>
              <GameData container>
                <Grid item xs={2}>
                  {timeSnapshot ? 'pausado' : playingTime}
                </Grid>
                <Grid item xs={3}>
                  {`Erros: ${mistakes}`}
                </Grid>
                <Grid item xs={5}>
                  <b>{game.title}</b>
                </Grid>
                <Grid item xs={2}>
                 <p><b>{currentQuestionIndex + 1}</b>{`/${questions.length}`}</p>
                </Grid>
              </GameData>
            </Grid>
          ) : null
        }

        <Grid item xs={12}>
          {
            resumeGame
              ? <GameResume
                  time={playingTime}
                  mistakes={mistakes}
                  questionsAmount={questions.length}
                />
              : <ShowQuestion
                question={questions[currentQuestionIndex]}
                handleCorrectResponse={nextQuestion}
                handleMistake={() => setMistakes(v => {
                  setMatchMistakes(v + 1)
                  return v + 1
                })}
                handleModalPause={isPaused => setTimeSnapshot(isPaused)}
              />
          }
        </Grid>
      </GameContent>
    </BackgroundContainer>
  )
}

export default Gameboard
