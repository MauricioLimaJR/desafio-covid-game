import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
import { SportsEsportsRounded } from '@material-ui/icons'
// Custom components
import Icon from'../../components/Icon'
import Modal from '../../components/Modal'
// Others
import * as colors from '../../../constants/colors'

const SquaredContainer = styled(Grid)`
  background-color: ${colors.razzmatazzPink};
  border-bottom: solid 4px ${colors.lipstickPink};
  border-radius: 20px;
  cursor: pointer;
  height: 100px;
  width: 100px;
`

const Title = styled.p`
  color: ${colors.galleryGray};
`

const TextIcon = styled.p`
  color: ${colors.white};
  font-weight: bold;
  font-size: 3rem;
  margin: 5px 0;
`

const GameCard = ({
  title,
  icon,
  textIcon,
  // handlers
  onGameBegin,
}) => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <SquaredContainer
        container
        alignContent={'center'}
        justify={'center'}
        onClick={() => setOpen(true)}
      >
        {/* title */}
        <Grid item xs={12} style={{ height: '2rem'}}>
          <Title>{title}</Title>
        </Grid>

        {
          textIcon
            ? (
              <Grid item xs={12}>
                <TextIcon>{textIcon}</TextIcon>
              </Grid>
            )
            : (
              <Grid item xs={12}>
                <Icon
                  color={'secondary'}
                  MIcon={icon || SportsEsportsRounded}
                  fontSize={'large'}
                />
              </Grid>
            )
        }
      </SquaredContainer>

      <Modal
        title={title}
        content={'Responda todas as perguntas no menor tempo que conseguir e tente não errar nas respostas. Assim você consiguirar mais pontos ao fim do jogo.'}
        action={'Começar o jogo'}
        open={open}
        handleClose={onGameBegin}
        handleOutsideClick={() => setOpen(false)}
      />
    </>
  )
}

export default GameCard
