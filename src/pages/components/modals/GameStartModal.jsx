import React from 'react'
import styled from 'styled-components'
// Material-UI
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core'
// Custom components
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'
import { clear } from 'sisteransi'
// import Award from '../../../static/images/award.svg'

const CustomDialogActions = styled(DialogActions)`
  justify-content: center !important;
  margin-bottom: 10px;
`

const CustomDialog = withStyles(theme => ({
  root: {
    textAlign: 'center',
  },
  paper: {
    border: `solid 2px ${colors.smoky}`,
    [theme.breakpoints.down('md')]: { backgroundSize: '40%' }
  },
}))(Dialog)

const Countdown = styled.p`
  color: ${colors.lividBrown};
  font-size: 4rem;
  margin: 0;
`

const Title = styled(Countdown)`
  font-size: 2rem;
  font-weight: bold;
`

const SubTitle = styled(Title)`
  font-size: 1.5rem;
`

const GameStartModal = ({
  handleGameStart,
  open,
  handleClose
}) => {
  const [countdown, setCountdown] = React.useState(3)

  const startCountingDown = () => {
    const numbers = [2, 1, 0]
    if (open) {
      [1,2,3].forEach(k => setTimeout(() => {
        setCountdown(v => v === 1 ? 1 : v -1)
      }, k * 1500))
      setTimeout(handleGameStart, 5000)
    }
  }

  startCountingDown()

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container direction='row' justify='flex-start' spacing={1}>
            {/* Title */}
            <Grid item xs={12}>
              <Title>Prepare-se</Title>
              <SubTitle>O jogo já vai começar 🚀</SubTitle>
            </Grid>

            {/* Explanation text */}
            <Grid item xs={12}>
              <Countdown>{countdown}</Countdown>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>
    </CustomDialog>
  )
}
export default GameStartModal
