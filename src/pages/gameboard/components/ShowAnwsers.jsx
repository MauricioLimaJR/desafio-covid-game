import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid } from '@material-ui/core'
// Custom components
import Button from '../../components/Button'
import ExplanationModal from './ExplanationModal'
// Others
import * as colors from '../../../constants/colors'
import Toast from '../../../lib/toastfy'

const AnwserBtn = ({ handleClick, selected, children }) => {
  const LineButton = styled.div`
    background-color: ${selected ? colors.lividBrown : colors.smoky};
    border-radius: 30px;
    border-bottom: solid 8px ${colors.eastbay};
    color: white;
    font-weight: bold;
    margin: 0 auto;
    padding: 13px 25px;
    width: 200px;

    :hover {
      box-shadow: 1px 1px 3px ${colors.abbeyGray};
      cursor: pointer;
      opacity: 0.9;
    }
  `

  return (
    <a onClick={handleClick}><LineButton>{children}</LineButton></a>
  )
}

const ShowAnwsers = ({
  alternatives,
  explanation,
  type = 'line', // quadrate
  handleCorrectResponse,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const checkAnwser = (isAnwser) => isAnwser
    ? setIsOpen(true) : Toast.error('Pense melhor...')

  const correctResponse = () => {
    setIsOpen(false)
    handleCorrectResponse()
  }

  return (
    <Grid container alignContent="center" justify="center" spacing={2}>
      {
        alternatives.map((alt, k) => {
          return type === 'line'
          ? (
            <Grid item xs={12}>
              <AnwserBtn handleClick={() => checkAnwser(alt.isAnwser)}>
                {alt.text}
              </AnwserBtn>
            </Grid>
          )
          : (
            <p>{alt.text}</p>
          )
        })
      }

      {/* Anwser modal */}
      <ExplanationModal
        actionLabel={'Próxima pergunta'}
        explanation={explanation}
        open={isOpen}
        handleClose={correctResponse}
      />
    </Grid>
  )
}

export default ShowAnwsers
