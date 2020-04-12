import React from 'react'
import styled from 'styled-components'
import { Formik, Form, Field } from 'formik'
// Material-UI
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField
} from '@material-ui/core'
// Custom components
import Button from '../Button'
// Others
import * as colors from '../../../constants/colors'
// import Award from '../../../static/images/award.svg'
import yup from '../../../lib/yup'

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
  },
}))(Dialog)

const CustomTextField = withStyles({
  root: {
    '& label': {
      color: `${colors.lividBrown}`,
    },
    '& label.Mui-focused': {
      color: `${colors.lividBrown}`,
    },
    '& .MuiFormHelperText-root': {
      color: `${colors.lividBrown}`,
    },
    '& .MuiInput-input': {
      color: `${colors.lividBrown}`,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: `${colors.lividBrown}`,
    },
  },
})(TextField)

const pStyle = {
  margin: '2px 0' ,
  color: colors.lividBrown,
}

const PlayerFormModal = ({
  explanation,
  actionLabel,
  open,
  handleClose
}) => {
  const initialValues={ name: '', instagram: '@' }

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
  })

  const onSubmit = async (values, formikBag) => {
    alert('foi')
  }

  return (
    <CustomDialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {/* <Grid container direction='row' justify='flex-start' spacing={1}>
          </Grid> */}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Grid container direction='row' justify='center' spacing={2} >
                <Grid item xs={12}>
                  <p style={pStyle}><b>Qual seu nome?</b></p>
                  <p style={pStyle}>Caso você entre no ranking, te chamaremos assim</p>
                </Grid>

                <Grid item xs={12}>
                  {/* Name field */}
                  <Field name='name'>
                    {({ field }) => (
                      <CustomTextField
                        {...field}
                        error={errors['name'] && touched['name']}
                        id="standard-error-helper-text"
                        label={'Seu nome'}
                        helperText={errors['name'] || null}
                      />
                    )}
                  </Field>
                </Grid>

                {/* Instagram field */}
                <Grid item xs={12}>
                  <Field name='instagram'>
                    {({ field }) => (
                      <CustomTextField
                        {...field}
                        error={errors['instagram'] && touched['instagram']}
                        id="standard-error-helper-text"
                        label={'Seu instagram (opcional)'}
                      />
                    )}
                  </Field>
                </Grid>

                {/* Submit btn */}
                <Grid item xs={12}>
                  <Button
                    color='primary'
                    type='submit'
                    onClick={handleClose}
                  >
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        </DialogContentText>

      </DialogContent>

      {/* <CustomDialogActions>
        <Button color='primary' onClick={handleClose}>
          {actionLabel}
        </Button>
      </CustomDialogActions> */}
    </CustomDialog>
  )
}
export default PlayerFormModal
