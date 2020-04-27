import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import GameCard from './components/GameCard'
import GameStartModal from '../components/modals/GameStartModal'
// Others
import * as colors from '../../constants/colors'
import { setGameStart, setMatchMistakes } from '../../lib/persistence'

const MainContainer = styled(Grid)`
  background-color: ${colors.lividBrown};
  height: 100%;
  max-width: 700px !important;
`

const Title = styled.p`
  color: ${colors.white};
  font-size: 1.5rem;
  font-weight: bold;
`

const Games = () => {
  const history = useHistory()
  const [open, setOpen] = React.useState(false)
  const [gameId, setGameId] = React.useState(false)

  const startGame = gameId => {
    setGameId(gameId)
    setOpen(true)
  }

  const handleGameStart = () => {
    setOpen(false)
    setGameStart(Date.now())
    setMatchMistakes(0)
    history.push(`/jogar?id=${gameId}`)
  }

  const games = [
    { id: '01', title: 'Quiz Inicial' },
    { id: '02', title: 'Quiz Ciência' },
    { id: '03', title: 'Quiz Geral', label: 'Em breve', disabled: true },
  ]

  return (
    <MainContainer
      container
      alignContent={'flex-start'}
      justify={'space-around'}
    >
      {/* Title */}
      <Grid item xs={12}>
        <Title>Escolha um dos jogos:</Title>
      </Grid>

      {/* Games available */}
      {
        games.map((game, k) => (
          <Grid items xs={8} md={3} style={{ margin: '5px' }}>
            <GameCard
              title={game.title}
              label={game.label}
              textIcon={k + 1}
              onGameBegin={game.disabled ? null : () => startGame(game.id)}
            />
          </Grid>
        ))
      }

      {/* Game Begin Modal */}
      <GameStartModal open={open} handleGameStart={handleGameStart} />
    </MainContainer>
  )
}

export default Games
