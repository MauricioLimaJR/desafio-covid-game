import React from 'react'
import styled from 'styled-components'
import * as colors from '../../constants/colors'

const Background = styled.div`
  background: linear-gradient(
    ${colors.cornflowerBlue},
    ${colors.steelBlue},
    ${colors.blueChill}
  );
  font-family: ${'Roboto, Regular, Helvetica'};
  min-height: 100vh;
  text-align: center;
`

const DefaultCanvas = ({ children }) => (
  <Background>
    {children}
  </Background>
)

export default DefaultCanvas
