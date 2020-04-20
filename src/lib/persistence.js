import cookie from 'js-cookie'

// Game start event
export const setGameStart = date => {
  cookie.remove('pause')
  cookie.set('pause', 0)

  cookie.remove('start')
  cookie.set('start', date)

  cookie.set('extra', true)
  // window.localStorage.removeItem('start')
  // window.localStorage.setItem('start', date)
}
export const getGameStart = () => {
  return cookie.get('start')
  // return window.localStorage.getItem('start')
}

// Game pause event
export const addPausedGameTime = seconds => {
  cookie.set('pause', seconds)
  // window.localStorage.removeItem('start')
  // window.localStorage.setItem('start', date)
}
export const getPausedGameTime = () => {
  return cookie.get('pause')
  // return window.localStorage.getItem('start')
}

// Mistakes events
export const setMatchMistakes = amount => {
  cookie.set('mistakes', amount)
  // window.localStorage.removeItem('mistakes')
  // window.localStorage.setItem('mistakes', amount)
}
export const getMatchMistakes = () => {
  return parseInt(cookie.get('mistakes'))
  // return parseInt(window.localStorage.getItem('mistakes'))
}

// Game extra points
export const endExtraPoints = () => cookie.set('extra', false)
export const getCanHaveExtra = () => cookie.get('extra')
