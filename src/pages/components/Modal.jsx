import React from 'react'
import styled from 'styled-components'
// Material-UI
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core'
// Custom components
import Button from './Button'
// Others
import * as colors from '../../constants/colors'

const CustomDialogActions = styled(DialogActions)`
  justify-content: center !important;
  margin-bottom: 10px;
`

const Modal = ({
  title,
  content,
  action,
  // handles
  open,
  handleClose,
  handleOutsideClick,
  ...props
}) => {

  return (
    <Dialog
      open={open}
      aria-labelledby="customized-dialog-title"
      aria-describedby="alert-dialog-description"
      {...props}
      onClose={handleOutsideClick}
    >
      {
        title
          ? (
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          )
          : null
      }


      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>

      <CustomDialogActions>
        <Button color='primary' onClick={handleClose}>
          {action}
        </Button>
      </CustomDialogActions>
    </Dialog>
  )
}
export default Modal
