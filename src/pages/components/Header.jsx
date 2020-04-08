import React from 'react'
import styled from 'styled-components'
import { useHistory, Link } from "react-router-dom"
// Material-UI
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
// Others
import * as colors from '../../constants/colors'

const HeaderContainer = styled(Grid)`
  background-color: ${colors.white};
  /* border-bottom: solid 1px ${colors.smoky}; */
  height: 6vh;
  padding: 10px 0 4px 0;

  p {
    color: ${colors.smoky};
    font-weight: bold;
    font-size: 2rem;
  }
  a {
    text-decoration: none;
  }
`

const Header = () => {
  const history = useHistory()
  const show = () => history.location.pathname !== '/'
    ? {} : { display: 'none' }

  return (
    <HeaderContainer
      container
      justify={'center'}
      alignContent={'center'}
      style={{ ...show()}}
    >
      <Grid item xs>
        <Link to='/'>
          <p>Desafio Covid</p>
        </Link>
      </Grid>
    </HeaderContainer>
  )
}

export default Header
