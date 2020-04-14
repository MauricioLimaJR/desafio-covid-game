import React from 'react'
// Material-UI
import { Grid, Divider } from '@material-ui/core'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
// Custom components
import NavMenu from './NavMenu'

const Footer = props => {
  const menuOptions = [
    // { title: 'Sobre', icon: HelpOutlineIcon, internal: '/sobre' },
    { title: 'Sobre', internal: '/sobre' },
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
