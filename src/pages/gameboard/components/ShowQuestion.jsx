import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid, Divider } from '@material-ui/core'
// Custom components
import ExplanationModal from './ExplanationModal'
// Others
import * as colors from '../../../constants/colors'
import Toast from '../../../lib/toastfy'

const AnwserBtn = ({ handleClick, selected, children }) => {
  const LineButton = styled.div`
    background-color: ${selected ? colors.lividBrown : colors.white};
    border-radius: 30px;
    border-bottom: solid 4px ${colors.eastbay};
    color: ${colors.eastbay};
    margin: 0 auto;
    padding: 13px 25px;
    width: 200px;

    font-size-adjust: 10;

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

const Question = styled.div`
  background-color: ${colors.white};
  border-bottom: solid 3px ${colors.smoky};
  border-radius: 0 0 100% 100%;
  color: ${colors.smoky};
  font-weight: bold;
  padding: 5px 1rem 2rem;
`

const ShowQuestion = ({
  question,
  handleCorrectResponse = () => {},
  handleMistake = () => {},
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const { question: asking, alternatives, explanation } = question
  const type = 'line'

  const checkAnwser = (isAnwser) => {
    if (isAnwser)  return setIsOpen(true)

    Toast.error('Pense melhor...')
    handleMistake()
  }

  const correctResponse = () => {
    setIsOpen(false)
    handleCorrectResponse()
  }

  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      spacing={2}
    >
      {/* Question */}
      <Grid item xs={12}>
        <Divider variant='middle'/>
        <Question>
          <p>{asking}</p>
        </Question>
      </Grid>

      {/* Alternatives */}
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

export default ShowQuestion
