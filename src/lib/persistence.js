import cookie from 'js-cookie'

// Game start event

export const setGameStart = date => {
  cookie.remove('start')
  cookie.set('start', date)
  // window.localStorage.removeItem('start')
  // window.localStorage.setItem('start', date)
}

export const getGameStart = () => {
  return cookie.get('start')
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
