import firstgame from '../games/firstgame'
import { shuffle } from './utils'

export const shuffleAlternatives = questions => {
  const shuffledQuestions = questions.map(question => {
    if (question.type === 'select') {
      question.alternatives = shuffle(question.alternatives)
    }
    return question
  })

  return shuffledQuestions
}

export const getGame = id => {
  switch (id) {
    case '01': return firstgame
    default: return firstgame
  }
}
