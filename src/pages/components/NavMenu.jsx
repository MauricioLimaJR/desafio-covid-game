import React from 'react'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import Icon from'./Icon'
// Others
import * as colors from '../../constants/colors'

const Styled = {}
const styles = (theme) => {
  Styled.Wrapper = styled(Grid)`
    align-items: center;
    background-color: ${p => p['data-color']};
    height: 5vh;
  `

  Styled.Option = styled(Grid)`
    color: ${p => p['data-color']};
    display: inline;
    margin: 0 15px !important;
    ${theme.breakpoints.down('md')} {
      margin: 0 3px !important;
    }

    a {
      color: ${p => p['data-color']};
      /* color: white; */
      cursor: pointer;
      text-decoration: none;

      :hover {
        font-weight: bold;
      }
    }
  `
}

const NavMenu = ({
  handleMenuClick,
  options,
  variant, // TODO: text (default) or contained
}) => {
  const history = useHistory()

  const color = history.location.pathname === '/signon' ? 'secondary' : 'primary'
  const textColor = color === 'primary' ? colors.white : colors.smoky
  const bgColor = color === 'primary' ? colors.smoky : colors.white

  const getRouteProp = option => {
    if (option.internal) return { onClick: () => history.push(option.internal) }
    return { href: option.external, target: '_blank' }
  }

  return (
    <Styled.Wrapper container justify='center' data-color={bgColor}>
      {options.map(option => (
        <Styled.Option
          item
          xs='auto'
          data-color={textColor}
        >
          {option.readOnly
            ? (
              <Grid item xs>
                {option.title}
              </Grid>
            )
            : (
              <a { ...getRouteProp(option) } >
                <Grid container justify='center' alignItems='center'>
                  <Grid item xs>
                    {option.title}
                  </Grid>
                  {
                    option.icon
                    ? (
                      <Grid item xs>
                        <Icon
                          color={color === 'primary' ? 'secondary' : 'primary'}
                          MIcon={option.icon}
                        />
                      </Grid>
                    )
                    : null
                  }
                </Grid>
                </a>
              )
            }
        </Styled.Option>
      ))}
    </Styled.Wrapper>
  )
}

export default withStyles(styles)(NavMenu)
