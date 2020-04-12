import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
import { Update, Error } from '@material-ui/icons'
// Custom components
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
  gameTime,
  mistakes,
}) => {
  const onDev = () => Toast.show('Recurso em densenvolvimento')

  const [username, setUsername] = React.useState(null)

  const [isOpen, setIsOpen] = React.useState(true)
  const handleCloseModal = username => {
    setUsername(username)
    setIsOpen(false)
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
        <h3>{gameTime}</h3>
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
        <Button onClick={onDev} color='alt' size='large'>Compartilhar no Whatsapp</Button>
      </Grid>
      <Grid items xs={12}>
        <Button onClick={onDev} color='secondary' size='large'>Ver Ranking</Button>
      </Grid>
    </MainContainer>
  )
}

export default GameResume
