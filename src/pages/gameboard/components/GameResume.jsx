import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import Button from '../../components/Button'
import PlayerFormModal from '../../components/modals/PlayerFormModal'
import Toast from '../../../lib/toastfy'
// Others
import * as colors from '../../../constants/colors'
import { SaveMatch, plusExtraPoints } from '../../../collections/operations'
import Award from '../../../static/images/award.svg'
import { getShareUrl, getGameScore } from '../../../lib/utils'
import { endExtraPoints, getCanHaveExtra } from '../../../lib/persistence'

const MainContainer = styled(Grid)`
  height: 100%;
  padding: 15px 10px;
  text-align: center;

  h3 {
    margin: 5px 0;
    color: ${colors.razzmatazzDarkPink};
  }

  b {
    color: ${colors.white};
  }
`

const SubTitle = styled.p`
  color: ${colors.white};
  margin: 5px 10px 20px;
`

const Title = styled(SubTitle)`
  font-size: 1.5rem;
  margin-bottom: 5px;
`

const Score = styled(SubTitle)`
  color: ${colors.razzmatazzDarkPink};
  font-size: 1.3rem;
  font-weight: bold;
  margin: 5px 10px 10px;
`

const GameData = styled(Grid)`
  border: solid 1px ${colors.razzmatazzPink};
  margin: 5px 0 !important;
  padding: 5px 0 3px !important;
`

const GameResume = ({
  time,
  mistakes,
  questionsAmount,
}) => {
  const [score, setScore] = React.useState(getGameScore(time, mistakes, questionsAmount))
  const [username, setUsername] = React.useState(null)
  const [instagram, setInstagram] = React.useState(null)
  const [matchId, setMatchId] = React.useState(null)

  const [isOpen, setIsOpen] = React.useState(true)
  const handleCloseModal = async user => {
    try {
      setUsername(user.name)
      if (user.instagram) setInstagram(user.instagram)
      setIsOpen(false)
      Toast.show('Salvando dados da partida 🔐')

      const match = { time, mistakes, score}
      const savedMatchId = await SaveMatch(user, match)
      setMatchId(savedMatchId)
    } catch (err) {
      // console.error(err)
      Toast.error('Aconteceu algum erro 😕')
    }
  }

  const sumExtra = () => {
    if (getCanHaveExtra()) {
      endExtraPoints()
      plusExtraPoints(matchId)
      setScore(v => v + 150)
    }
  }

  return (
    <MainContainer
      container
      alignContent="center"
      justify="center"
    >
      <PlayerFormModal open={isOpen} handleClose={handleCloseModal}/>
      <Grid item xs={12}>
        <img height={120} src={Award} alt='podium' />
      </Grid>
      <Grid item xs={12}>
        <Title>
          {`Parabéns, ${typeof username === 'string' ? username : ''}`}
        </Title>
        <Score>
          {`${score} pontos`}
        </Score>
      </Grid>

      {/* Game Data */}
      <GameData item xs={8}>
        <b>Tempo de jogo</b>
        <h3>{time}</h3>
      </GameData>
      <GameData item xs={8}>
        <b>Erros cometidos:</b>
        <h3>{mistakes}</h3>
      </GameData>

      <Grid item xs={12}>
        <SubTitle>
          Informação é poder! Compartilhe esse jogo com mais pessoas. #DesafioCovid
        </SubTitle>
      </Grid>

      {/* Actions */}
      <Grid items xs={12}>
        <SubTitle>
          <b>Compartilhe no Whatsapp e ganhe mais pontos!</b> Cada clique no seu link enviado também serão convertidos em pontos 🎉
        </SubTitle>
        <Button
          color='alt'
          size='large'
          external={getShareUrl(score, instagram)}
          onClick={() => sumExtra()}
        >
          Compartilhar e ganhar + 150 pontos 🎁
        </Button>
      </Grid>
      <Grid items xs={12} style={{ marginTop: '10px' }}>
        <Link to='/ranking'>
          <Button color='secondary' size='large'>Ver Ranking</Button>
        </Link>
      </Grid>
    </MainContainer>
  )
}

export default GameResume
