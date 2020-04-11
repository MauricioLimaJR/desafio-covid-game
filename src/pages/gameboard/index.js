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
  getMatchMistakes,
  setMatchMistakes } from '../../lib/persistence'
import gameSelector from '../../lib/gameSelector'

const BackgroundContainer = styled(Grid)`
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

const Gameboard = () => {
  const query = new URLSearchParams(useLocation().search)
  const { id } = query.get('id')

  const [startGameTime] = React.useState(getGameStart())
  const [playingTime, setPlayingTime] = React.useState('00:00')

  const [mistakes, setMistakes] = React.useState(getMatchMistakes())

  const twoDigitsParser = time => time >= 10 ? `${time}` : `0${time}`

  const timeUp = () => {
    const currentMoment = new Date(Date.now() - startGameTime)
    const minutes = twoDigitsParser(currentMoment.getMinutes())
    const seconds = twoDigitsParser(currentMoment.getSeconds())

    const timeToString = `${minutes}:${seconds}`
    setPlayingTime(timeToString)
  }

  const [intervalID, setIntervalID] = React.useState(false)

  const timeCounter = () => setInterval(() => timeUp(), 1000)

  React.useEffect(() => {
    setIntervalID(timeCounter())
  }, [1])

  const game = gameSelector(id)
  const questions = game.alternatives
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
                  {playingTime}
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
                  gameTime={playingTime}
                  mistakes={mistakes}
                />
              : <ShowQuestion
                question={questions[currentQuestionIndex]}
                handleCorrectResponse={nextQuestion}
                handleMistake={() => setMistakes(v => {
                  setMatchMistakes(v + 1)
                  return v + 1
                })}
              />
          }
        </Grid>
      </GameContent>
    </BackgroundContainer>
  )
}

export default Gameboard
