import React from 'react'
import styled from 'styled-components'
// Layout components
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Grid,
  Hidden,
} from '@material-ui/core'
// Custom components
// import Card from '../items/Card'
// import Text from '../items/Text'

const Styled = {}
const styles = () => {
  Styled.Container = styled(Grid)`
    max-height: 100%;
  `

  Styled.Header = styled(Grid)`
    display: flex;
  `

  Styled.Content = styled.div`
    border-top: solid 0.5px black;
    margin: 0.25rem 2rem 2rem;
    /* overflow-y: scroll; */
  `

  Styled.CloseButton = styled(Button)`
    position: absolute;
    top: 1rem;
    right: 1rem;
  `

  Styled.ModalCard = styled.div`
    display: flex;
    max-height: 100%;
    /* min-height: 80vh; */
    padding: 1rem;
    position: relative;
    overflow: hidden;
  `
}

const ContentModal = ({
  title,
  label,
  // Action
  onClick = () => {},
  // component content
  children,
}) => (
  <Styled.ModalCard
    container
    direction='column'
    spacing={4}
  >
    {/* Header */}
    {/* <Styled.Header item container justify='center'>
      <Text type='subtitle'>
        {title}
      </Text>
    </Styled.Header> */}

    {/* Content */}
    <Styled.Content spacing={4} item xs>
      {children}
    </Styled.Content>

    {/* Action */}
    <Grid item container justify='center'>
      <Hidden mdUp>
        <Styled.CloseButton onClick={onClick} variant='text'>
          {/* <Icon render={xIcon} /> */}
          X
        </Styled.CloseButton>
      </Hidden>
      <Hidden smDown>
        <Button
          variant='contained'
          color='primary'
          type='button'
          onClick={onClick}
        >
          {label}
        </Button>
      </Hidden>
    </Grid>
  </Styled.ModalCard>
)

export default withStyles(styles)(ContentModal)
