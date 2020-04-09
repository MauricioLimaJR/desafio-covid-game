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
import Award from '../../../static/images/award.svg'

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
    backgroundImage: `url(${Award})`,
    backgroundPosition: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '15%',
    [theme.breakpoints.down('md')]: { backgroundSize: '40%' }
  },
}))(Dialog)

const ExplanationModal = ({
  explanation,
  actionLabel,
  open,
  handleClose
}) => {

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Grid container direction='row' justify='flex-start' spacing={1}>
            {/* Explanation text */}
            <Grid item xs={12}>
              <h4>{explanation}</h4>
            </Grid>
          </Grid>
        </DialogContentText>
      </DialogContent>

      <CustomDialogActions>
        <Button color='primary' onClick={handleClose}>
          {actionLabel}
        </Button>
      </CustomDialogActions>
    </CustomDialog>
  )
}
export default ExplanationModal
