import React from 'react'
import styled from 'styled-components'
// Material-UI
import { withStyles } from '@material-ui/core/styles'
// Custom
// import * as colors from '../../constants/colors'

const Styled = {}
const styles = () => {
  Styled.Body = styled.div`
    align-items: flex-start;
    display: flex;
    /* height: 80vh; */
    height: 100%;
    justify-content: center;
    padding: 2vh;
    /* padding-top: 0; */
    /* overflow-y: scroll; */
    text-align: center;
  `
}

const BodyContent = ({ children }) => (
  <Styled.Body>
    {children}
  </Styled.Body>
)

export default withStyles(styles)(BodyContent)
