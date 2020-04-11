import React from 'react'
// Material-UI
import { Grid, Divider } from '@material-ui/core'
import InstagramIcon from '@material-ui/icons/Instagram'
// Custom components
import NavMenu from './NavMenu'

const Footer = props => {
  const menuOptions = [
    { title: 'Desafio Covid', readOnly: true },
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
        <Divider variant='middle'/>
        <NavMenu options={menuOptions} variant={'text'} />
      </Grid>
    </Grid>
  )
}

export default Footer
