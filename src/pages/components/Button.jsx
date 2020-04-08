import React from 'react'
import styled from 'styled-components'
import * as colors from '../../constants/colors'

const CustomDiv = styled.div`
  align-content: center;
  align-self: center;
  border-radius: 30px;
  box-shadow: 0.5px 0.5px 10px ${colors.black};
  color: white;
  display: flex;
  font-family: inherit;
  font-weight: bold;
  justify-content: center;
  margin: 0 auto;
  padding: 10px 25px;
  width: max-content;

  :hover {
    background-color: ${colors.studioPurple};
    box-shadow: 1px 1px 3px ${colors.abbeyGray};
    cursor: pointer;
  }
`

const CustomButton = styled.button`
  background: none;
  border: none;
  outline: none;
`

/**
 * Custom Button
 *
 * @param {String} color - primary (default) or secondary
 * @param {String} size - TODO: small, medium (default) or largest
 * @param {String} variant - TODO: text or contained (default)
 */
const Button = ({
  color,
  size = 'medium',
  variant = 'contained',
  children,
  ...props
}) => {
  const setColor = color => {
    switch (color) {
      case 'secondary': return {
        backgroundColor: colors.white,
        color: colors.smoky,
      }
      case 'primary':
      default: return {
        backgroundColor: colors.smoky,
      }
    }
  }

  const setSize = size => {
    switch (size) {
      case 'large': return { width: '180px' }
      case 'small': return { width: '100px' }
      case 'medium':
      default: return {}
    }
  }

  const setVariant = variant => {
    switch (variant) {
      case 'text': return {}
      case 'outllined': return {}
      case 'contained':
      default: return {}
    }
  }

  const btnStyle = {
    ...setColor(color),
    ...setSize(size),
  }

  return (
    <CustomButton {...props}>
      <CustomDiv style={btnStyle}>
        {children}
      </CustomDiv>
    </CustomButton>
  )
}

export default Button
