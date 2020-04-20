export const shuffle = array => {
  const sorted = [...array]
  sorted.sort(() => Math.random() - 0.5)
  return sorted
}

export const getShareUrl = (score, instagram = null) => {
  const url = 'https://api.whatsapp.com/send?text=Hora%20do%20desafio%21%20Vamos%20combater%20o%20novo%20%23coronavirus%20da%20maneira%20mais%20segura%20e%20legal%20que%20existe%21%21%0A%0AAcesse%20agora%20DesafioCovid.com%2Fchallenger%20para%20jogar%20um%20quiz%20com%20muitas%20informa%C3%A7%C3%B5es%20sobre%20o%20novo%20coronav%C3%ADrus%20e%20tente%20fazer%20uma%20pontua%C3%A7%C3%A3o%20maior%20que%20a%20minha%20%F0%9F%98%8C%0AAcabei%20de%20jogar%20e%20fiz%20%2Ascore%2A%20pontos%21'
  return url
    .replace('score', score)
    .replace('challenger', instagram ? `desafiante=${instagram}` : '')
}

export const randomErrorMessages = () => {
  const errors = [
    'Opa!, pense melhor 💭',
    'Tente outra resposta 🙉',
    'Resposta errada 😫',
    'Não foi dessa vez 😥',
    'Ihh, errou... 👀',
  ]

  return errors[Math.floor(Math.random() * 5)]
}

export const getSecondsFromString = str => {
  console.log(str)
  const [minutes, seconds] = str.split(':')
  let totalSeconds = parseInt(seconds)
  if (minutes > 0) {
    totalSeconds += minutes * 60
  }
  return totalSeconds
}

/**
 * Game Score Math
 *
 * @param {Number} time
 * @param {Number} mistakes
 * @param {Number} questionsAmount
 */
export const getGameScore = (time, mistakes, questionsAmount) =>  {
  const parsedTime = getSecondsFromString(time)
  const parsedMistakes = parseInt(mistakes)
  const parsedQuestionsAmount = parseInt(questionsAmount)

  // Lower possible value
  const LOWER_SCORE = parsedQuestionsAmount * 50
  // Points for correct question (Max value)
  const QUESTIONS_POINT = parsedQuestionsAmount * 250
  // Max Points payed for misktakes
  const MAX_MISTAKES_PRICE = parsedQuestionsAmount * 100
  // Points payed for each misktakes
  const MISTAKE_PRICE = 50
  // Max points payed for timing
  const MAX_TIME_PRICE = parsedQuestionsAmount * 100
  // Points payed for each second
  const TIME_PRICE = MAX_TIME_PRICE / 180

  let pointsLostByMistakes = MISTAKE_PRICE * parsedMistakes
  let pointsLostByTime = TIME_PRICE * parsedTime

  let score = QUESTIONS_POINT
  score = score - (pointsLostByMistakes > MAX_MISTAKES_PRICE ? MAX_MISTAKES_PRICE : pointsLostByMistakes)
  score = score - (pointsLostByTime > MAX_TIME_PRICE ? MAX_TIME_PRICE : pointsLostByTime)

  return score < LOWER_SCORE ? LOWER_SCORE : parseInt(score)
}

/**
 * Returns a string limited to 15 chars amount
 *
 * @param {String} str
 */
export const getLimitedString = str => {
  if (!str) return false
  return str.length > 16 ? str.slice(0, 17) : str
}
