import React from 'react'
import styled from 'styled-components'
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
import Award from '../../../static/images/award.svg'

const MainContainer = styled(Grid)`
  height: 100%;
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
`

const GameResume = ({
  time,
  mistakes,
}) => {
  const db = firebase.firestore()

  const onDev = () => Toast.show('Recurso em densenvolvimento')

  const [username, setUsername] = React.useState(null)

  const [isOpen, setIsOpen] = React.useState(true)
  const handleCloseModal = async user => {
    try {
      setUsername(user.name)
      setIsOpen(false)

      Toast.show('Salvando dados da partida...')
      await db.collection('users').add({ time, mistakes, ...user })
    } catch (err) {
      Toast.error('Algum erro aconteceu aqui..')
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
        <img height={150} src={Award} alt='podium' />
      </Grid>
      <Grid item xs={12}>
        <Title>
          {`Parabéns, ${typeof username === 'string' ? username : ''}`}
        </Title>
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
          onClick={onDev}
          color='alt'
          size='large'
          external={'https://api.whatsapp.com/send?text=Voc%C3%AA%20foi%20desafio%20por%20mim%20a%20combater%20o%20novo%20%23coronavirus%20da%20maneira%20mais%20segura%20e%20legal%20que%20existe%21%21%0AAcesse%20o%20Desafio%20Covid%20para%20jogar%20um%20quiz%20sobre%20o%20novo%20coronav%C3%ADrus%20e%20tente%20fazer%20uma%20pontua%C3%A7%C3%A3o%20maior%20que%20a%20minha%20%F0%9F%98%8C%0A%0Adesafiocovid.com'}
        >
          Compartilhar no Whatsapp
        </Button>
      </Grid>
      <Grid items xs={12}>
        <Button  onClick={onDev} color='secondary' size='large'>Ver Ranking</Button>
      </Grid>
    </MainContainer>
  )
}

export default GameResume
