import React from 'react'
import styled from 'styled-components'
// Material-UI
import { Grid, Divider } from '@material-ui/core'
// Custom components
import ExplanationModal from './ExplanationModal'
// Others
import * as colors from '../../../constants/colors'
import Toast from '../../../lib/toastfy'
import { randomErrorMessages } from '../../../lib/utils'
import { addPausedGameTime, getPausedGameTime } from '../../../lib/persistence'

const AnwserBtn = ({ handleClick, selected, children, isFake, isTrue }) => {
  const LineButton = styled.div`
    background-color: ${selected ? colors.lividBrown : colors.razzmatazzPink};
    border-radius: 30px;
    border-bottom: solid 4px ${colors.razzmatazzDarkPink};
    color: ${colors.white};
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

  const FakeButton = styled(LineButton)`
    background-color: ${colors.white};
    color: ${colors.pomegranateRed};
    border: solid 4px ${colors.pomegranateRed};
  `

  const TrueButton = styled(LineButton)`
    background-color: ${colors.white};
    color: ${colors.parsleyGreen};
    border: solid 4px ${colors.parsleyGreen};
  `

  const getButton = () => {
    if (isFake) return <FakeButton>{children}</FakeButton>
    else if (isTrue) return <TrueButton>{children}</TrueButton>

    return <LineButton>{children}</LineButton>
  }

  return (
    <a onClick={handleClick}>{getButton()}</a>
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
  // Game Pause event
  const [startPause, setStartPause] = React.useState(null)

  const { question: asking, alternatives, explanation, type = 'line' } = question

  const checkAnwser = (isAnwser) => {
    if (isAnwser) {
      setIsOpen(true)
      setStartPause(Date.now())
      return true
    }

    Toast.singleError(randomErrorMessages())
    handleMistake()
  }

  const correctResponse = () => {
    const paused = getPausedGameTime()
    addPausedGameTime(parseInt(paused) + (Date.now() - startPause))

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
        type === 'line'
          ? (
            alternatives.map((alt, k) => (
              <Grid item xs={12}>
                <AnwserBtn handleClick={() => checkAnwser(alt.isAnwser)}>
                  {alt.text}
                </AnwserBtn>
              </Grid>
            ))
          )
          : (
            <>
              <Grid item xs={12}>
                {/* Fake */}
                <AnwserBtn isFake handleClick={() => checkAnwser(alternatives.isFake)}>
                  Fake
                </AnwserBtn>
              </Grid>

              <Grid item xs={12}>
                {/* News */}
                <AnwserBtn isTrue handleClick={() => checkAnwser(!alternatives.isFake)}>
                  News
                </AnwserBtn>
              </Grid>
            </>
          )
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
