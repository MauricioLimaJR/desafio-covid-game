import React from 'react'
import styled from 'styled-components'
import * as colors from '../../constants/colors'

const CustomDiv = styled.div`
  align-content: center;
  align-self: center;
  border-radius: 30px;
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

const CustomHref = styled.a`
  background: none;
  border: none;
  outline: none;
  text-decoration: none;
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
  external,
  ...props
}) => {
  const setColor = color => {
    switch (color) {
      case 'alt': return {
        backgroundColor: colors.razzmatazzDarkPink,
        color: colors.white,
      }
      case 'secondary': return {
        backgroundColor: colors.white,
        color: colors.lividBrown,
      }
      case 'primary':
      default: return {
        backgroundColor: colors.lividBrown,
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

    external
      ? (
        <CustomHref {...props}>
          <CustomDiv style={btnStyle}>
            {children}
          </CustomDiv>
        </CustomHref>
      )
      : (
        <CustomButton href={external} {...props}>
          <CustomDiv style={btnStyle}>
            {children}
          </CustomDiv>
        </CustomButton>
      )

  )
}

export default Button
