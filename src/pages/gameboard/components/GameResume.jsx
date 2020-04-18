import React from 'react'
import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'
// Material-UI
import { Grid } from '@material-ui/core'
import { Update, Error } from '@material-ui/icons'
// Custom components
import firebase from '../../../firebase/firebase'
import Button from '../../components/Button'
import PlayerFormModal from '../../components/modals/PlayerFormModal'
import Toast from '../../../lib/toastfy'
// Others
import * as colors from '../../../constants/colors'
import { SaveMatch } from '../../../collections/operations'
import Award from '../../../static/images/award.svg'
import { getShareUrl, getGameScore } from '../../../lib/utils'

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
`

const GameResume = ({
  time,
  mistakes,
  questionsAmount,
}) => {
  const db = firebase.firestore()
  const onDev = () => Toast.show('Recurso em densenvolvimento')

  const score = getGameScore(time, mistakes, questionsAmount)
  const [username, setUsername] = React.useState(null)

  const [isOpen, setIsOpen] = React.useState(true)
  const handleCloseModal = async user => {
    try {
      setUsername(user.name)
      setIsOpen(false)
      Toast.show('Salvando dados da partida 🔐')

      const match = { time, mistakes, score}
      await SaveMatch(user, match)
    } catch (err) {
      Toast.error('Aconteceu algum erro 😕')
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
      <Grid item xs={12}>
        <b>Tempo de jogo</b>
        <h3>{time}</h3>
      </Grid>
      <Grid item xs={12}>
        <b>Erros cometidos:</b>
        <h3>{mistakes}</h3>
      </Grid>

      <Grid item xs={12}>
        <SubTitle>
          Informação é poder! Compartilhe esse jogo com mais pessoas. #DesafioCovid
        </SubTitle>
      </Grid>

      {/* Actions */}
      <Grid items xs={12}>
        <Button
          color='alt'
          size='large'
          external={getShareUrl(score)}
        >
          Compartilhar no Whatsapp
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
