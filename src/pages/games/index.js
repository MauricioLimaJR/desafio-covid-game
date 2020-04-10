import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()

  const startGame = gameId => {
    history.push(`/jogar?id=${gameId}`)
  }

  const games = [
    { id: '01', title: 'quiz', game: {} },
    { id: '01', title: 'quiz', game: {} },
    { id: '01', title: 'quiz', game: {} },
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
            <GameCard title={game.title} textIcon={k + 1} onGameBegin={() => startGame(game.id)} />
          </Grid>
        ))
      }
    </MainContainer>
  )
}

export default Games
