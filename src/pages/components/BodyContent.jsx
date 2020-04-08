import React from 'react'
import styled from 'styled-components'
import { Grid } from '@material-ui/core'
// Others
import * as colors from '../../constants/colors'

const Background = styled(Grid)`
  background: linear-gradient(
    ${colors.cornflowerBlueLigth},
    ${colors.steelBlue},
    ${colors.blueChill}
  );
  height: 89vh;
  width: 100vh;
  text-align: center;
  overflow: hidden;
`

const BodyContent = ({ children }) => (
  <Background container justify="center" alignContent='center' direction="row">
    {children}
  </Background>
)

export default BodyContent
