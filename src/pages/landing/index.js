import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import ResumeSection from './componens/ResumeSection'
import RulesSection from './componens/RulesSection'
import GameStartModal from '../components/modals/GameStartModal'
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
  const [open, setOpen] = React.useState(false)
  const history = useHistory()

  const handleGameStart = () => {
    setOpen(false)
    setGameStart(Date.now())
    setMatchMistakes(0)
    history.push(`/jogar?id=01`)
  }

  return (
    <BackgroundContainer container>
      <GameStartModal open={open} handleGameStart={handleGameStart} />
      <ResumeSection start={() => setOpen(true)} />
      <RulesSection start={() => setOpen(true)} />
    </BackgroundContainer>
  )
}

export default Landing
