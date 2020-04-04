import React from 'react'
import styled from 'styled-components'
import * as colors from '../../constants/colors'

const CustomDiv = styled.div`
  align-content: center;
  align-self: center;
  align-content: center;
  /* background-color: ${colors.razzmatazzPink}; */
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
 * @param {String} color
 * @param {String} size
 * @param {String} variant
 */
const Button = ({
  color,
  size = 'medium',
  variant = 'contained',
  children
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
        // color: colors.razzmatazzPink,
      }
    }
  }

  const setSize = size => {
    switch (size) {
      case 'large': return colors.smoky
      case 'small': return colors.smoky
      case 'medium':
      default: return colors.smoky
    }
  }

  const setVariant = variant => {
    switch (variant) {
      case 'text': return colors.smoky
      case 'outllined': return colors.smoky
      case 'contained':
      default: return colors.smoky
    }
  }

  const btnStyle = {
    ...setColor(color)
  }

  return (
    <CustomButton>
      <CustomDiv style={btnStyle}>
        {children}
      </CustomDiv>
    </CustomButton>
  )
}

export default Button
