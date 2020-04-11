import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { Grid } from '@material-ui/core'
// Others
import * as colors from '../../constants/colors'

const Background = styled(Grid)`
  background: linear-gradient(
    /* ${colors.cornflowerBlueLigth}, */
    ${colors.steelBlue},
    /* ${colors.blueChill} */
    ${colors.lividBrown}
  );
  height: 89vh;
  width: 100vw;
  text-align: center;
  overflow: hidden;
`

const BodyContent = ({ children }) => {
  const history = useHistory()
  const height = history.location.pathname === '/'
    ? { height: '94.5vh' } : {}

  return (
    <Background container justify="center" alignContent='center' direction="row" style={height}>
      {children}
    </Background>
  )
}

export default BodyContent
