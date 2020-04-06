import React from 'react'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import { Modal, ModalContent } from '../../components/modal/index'
import Button from '../../components/Button'
// Others
import * as colors from '../../../constants/colors'

const ExplanationModal = ({
  explanation,
  onClose,
  open,
  trigger,
}) => {

  return (
    <Modal open={open} trigger={trigger}>
      <ModalContent>
        <Grid container direction='row' justify='flex-start' spacing={1}>
          {/* Explanation text */}
          <Grid item xs={12}>
            <h4>{explanation}</h4>
          </Grid>

          {/* Next question button */}
          <Grid item xs={12}>
            <Button color='primary' onClick={onClose}>
              Próxima pergunta
            </Button>
          </Grid>
        </Grid>
      </ModalContent>
    </Modal>
  )
}
export default ExplanationModal
