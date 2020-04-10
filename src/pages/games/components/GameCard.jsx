import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
import { SportsEsportsRounded } from '@material-ui/icons'
// Custom components
import Icon from'../../components/Icon'
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
  onClick,
}) => {

  return (
    <SquaredContainer
      container
      alignContent={'center'}
      justify={'center'}
      onClick={onClick}
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
  )
}

export default GameCard
