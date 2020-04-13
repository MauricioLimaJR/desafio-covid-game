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
import Toast from '../../../lib/toastfy'
import yup from '../../../lib/yup'

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
  open,
  handleClose
}) => {

  const initialValues={ name: '', instagram: '@' }

  const validationSchema = yup.object().shape({
    name: yup.string().required(),
  })

  const onSubmit = async (values, formikBag) => {
    try {
      const { name, instagram } = values
      handleClose({ name, instagram })
    } catch (err) {
      Toast.error('Algum erro aconteceu..')
    }
  }

  return (
    <CustomDialog
      open={open}
      aria-labelledby="customized-dialog-title"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
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
                    <Button color='primary' type='submit'>
                      Salvar
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </DialogContentText>
      </DialogContent>
    </CustomDialog>
  )
}
export default PlayerFormModal
