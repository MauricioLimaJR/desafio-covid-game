import * as yup from 'yup'
import common from '../static/locale/common'
/**
 * @name setYupLocale
 * @description
 * Set's the message from form validation based on language currently loaded.
 * @see https://github.com/jquense/yup#using-a-custom-locale-dictionary
 * @see https://github.com/jquense/yup/issues/159
 */
yup.setLocale({
  mixed: {
    required: common.validations['required'],
  },
  string: {
    required: common.validations['required'],
    min: ({ min }) => ({
      key: 'string',
      options: { min },
    }),
    max: ({ max }) => ({
      key: common.validations['string-max'],
      options: { max },
    }),
  },
  number: {
    required: common.validations['required'],
    integer: common.validations['integer'],
    positive: common.validations['positive'],
    min: ({ min }) => ({
      key: common.validations['number-min'],
      options: { min },
    }),
    max: ({ max }) => ({
      key: common.validations['number-max'],
      options: { max },
    }),
  },
  boolean: {
    required: common.validations['required'],
  },
  date: {
    required: common.validations['required'],
  },
  object: {
    required: common.validations['required'],
  },
  array: {
    required: common.validations['required'],
  },
})

export default yup
