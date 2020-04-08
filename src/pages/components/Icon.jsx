import React from 'react'
// Material-UI Components
import { Button } from '@material-ui/core'
// Others
import * as colors from '../../constants/colors'

const Icon = ({
  button = false,
  color = 'default',
  MIcon,
  onClick = () => {},
}) => {
  const setColor = () => {
    switch (color) {
      case 'primary': return `${colors.mediumPurple}`
      case 'secondary': return `${colors.white}`
      default: return `${colors.abbeyGray}`
    }
  }

  return (
    <div>
      {
        button
          ? <Button
              size='small'
              variant='outlined'
              onClick={onClick}
            >
            <MIcon style={{ color: setColor() }} />
          </Button>
          : <MIcon style={{ color: setColor() }} />
      }
    </div>
  )
}

export default Icon
