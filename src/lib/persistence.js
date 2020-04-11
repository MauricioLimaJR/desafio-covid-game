import cookie from 'js-cookie'

// Game start event

export const setGameStart = date => {
  cookie.set('start', date)
}

export const getGameStart = () => cookie.get('start')

// Mistakes events

export const setMatchMistakes = amount => {
  cookie.set('mistakes', amount)
}

export const getMatchMistakes = () => parseInt(cookie.get('mistakes'))
