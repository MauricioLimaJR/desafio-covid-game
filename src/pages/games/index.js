import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import GameCard from './components/GameCard'
// Others
import * as colors from '../../constants/colors'

const MainContainer = styled(Grid)`
  background-color: ${colors.lividBrown};
  height: 100%;
  max-width: 700px !important;
`

const Games = () => {
  const games = [
    { title: 'quiz', game: {} },
    { title: 'quiz', game: {} },
    { title: 'quiz', game: {} },
  ]

  return (
    <MainContainer
      container
      alignContent={'center'}
      justify={'space-around'}
    >
      {
        games.map((game, k) => (
          <Grid items xs={5} md={3} style={{ margin: '5px' }}>
            <GameCard title={game.title} textIcon={k + 1} onClick={() => alert('foi')} />
          </Grid>
        ))
      }
    </MainContainer>
  )
}

export default Games
