import React from 'react'
// Material-UI
import { Grid } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
// Custom components
import NavMenu from './NavMenu'

const Footer = props => {
  const menuOptions = [
    { title: 'Desafio Covid 2020', readOnly: true },
    { icon: InstagramIcon, external: 'https://www.instagram.com/' },
  ]

  return (
    <Grid
      container
      justify={'center'}
      alignItems={'center'}
      {...props}
    >
      <Grid item xs>
        <NavMenu options={menuOptions} variant={'text'} />
      </Grid>
    </Grid>
  )
}

export default Footer
