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
    background-color: ${selected ? colors.lividBrown : colors.eastbay};
    border-radius: 30px;
    border-bottom: solid 3px ${colors.smoky};
    color: white;
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
}) => {
  const [selected, setSelected] = React.useState(null)
  const [isCorrect, setIsCorrect] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(true)

  const checkAnwser = () => {
    return isCorrect ? setIsOpen(true) : Toast.error('incorreto')
  }

  const nextQuestion = () => {
    setIsOpen(false)
    setIsCorrect(false)
  }

  return (
    <Grid container alignContent="center" justify="center" spacing={2}>
      {
        alternatives.map((alt, k) => {
          return type === 'line'
          ? (
            <Grid item xs={12}>
              <AnwserBtn selected={selected === k} handleClick={() => setSelected(k) || setIsCorrect(alt.isAnwser)}>
                {alt.text}
              </AnwserBtn>
            </Grid>
          )
          : (
            <p>{alt.text}</p>
          )
        })
      }

      <Grid item xs={12} style={{ marginTop: "20px" }}>
        <Button color='secondary' onClick={() => checkAnwser()}>
          Responder
        </Button>
        <ExplanationModal
          actionLabel={'Próxima pergunta'}
          explanation={explanation}
          open={isOpen}
          handleClose={nextQuestion}
        />
      </Grid>
    </Grid>
  )
}

export default ShowAnwsers
