import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom Settings
import ResumeSection from './componens/ResumeSection'
import RulesSection from './componens/RulesSection'
// Others
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
  return (
    <BackgroundContainer container>
      <ResumeSection />
      <RulesSection />
    </BackgroundContainer>
  )
}

export default Landing
