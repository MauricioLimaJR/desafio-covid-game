import React from 'react'
// Material-UI
import { Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
// Custom components
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import MuiDialogActions from '@material-ui/core/DialogActions'

const actionsDialogStyles = makeStyles({
  root: {
    justifyContent: 'center',
    marginBottom: '10px',
  },
})

const dialogStyles = makeStyles({
  root: {
    borderRadius: 13,
  },
})

const ExplanationModal = ({
  explanation,
  actionLabel,
  open,
  handleClose
}) => {
  const classes = dialogStyles()
  const diaS = actionsDialogStyles()

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      classes={{
        root: classes.root
      }}
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

      <DialogActions classes={{ root: diaS.root }}>
        <Button color='primary' onClick={handleClose}>
          {actionLabel}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
export default ExplanationModal
