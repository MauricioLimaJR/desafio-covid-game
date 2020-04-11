import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import ResumeSection from './componens/ResumeSection'
import RulesSection from './componens/RulesSection'
// Others
import { setGameStart, setMatchMistakes } from '../../lib/persistence'
import skyBackground from '../../static/images/background.png'

const BackgroundContainer = styled(Grid)`
  background-image: url(${skyBackground});
  background-position: center;
  background-size: cover;
  height: 95vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
`

const Landing = () => {
  const history = useHistory()

  const startGame = gameId => {
    history.push(`/jogar?id=${gameId}`)
    setGameStart(Date.now())
    setMatchMistakes(0)
  }

  return (
    <BackgroundContainer container>
      <ResumeSection start={startGame} />
      <RulesSection start={startGame} />
    </BackgroundContainer>
  )
}

export default Landing
