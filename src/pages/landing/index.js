import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import ResumeSection from './componens/ResumeSection'
import RulesSection from './componens/RulesSection'
// Others
import { handleChallenge } from '../../lib/persistence'
import skyBackground from '../../static/images/background.png'
import { addChallengePoints } from '../../collections/operations'

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
  // Query Param
  const query = new URLSearchParams(useLocation().search)
  const challenger = query.get('desafiante')
  if (challenger) handleChallenge(challenger, addChallengePoints)

  const history = useHistory()

  const handleGameStart = () => {
    history.push('/jogos')
  }

  return (
    <BackgroundContainer container>
      <ResumeSection start={handleGameStart} />
      <RulesSection start={handleGameStart} />
    </BackgroundContainer>
  )
}

export default Landing
