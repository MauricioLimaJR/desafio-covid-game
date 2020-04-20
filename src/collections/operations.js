import User from './User'
import GameMatch from './GameMatch'

export const SaveMatch = async (user, match) => {
  try {
    const exists = await User.getUserByInstagram(user.instagram)

    const userId = exists || await User.create(user)
    if (!userId) throw new Error('Failed creating new user')

    const matchId = await GameMatch.create(
      { gameId: 'basico', userId, ...user, ...match }
    )
    return matchId
  } catch (err) {
    throw err
  }

}

/**
 * Return ranking game data by timimng options
 *
 * @param {String} timing - time interval, could be: fresh, day, global
 */
export const GetRanking = async (timing) => {
  let interval = new Date()

  switch (timing) {
    case 'fresh':
      interval.setHours(interval.getHours() - 2)
      break;
    case 'day':
      interval.setDate(interval.getDate() - 1)
      break;
    default:
      return await GameMatch.getRanking()
  }

  try {
    if (timing) return await GameMatch.getRankingByInterval(interval)
  } catch (err) {
    throw err
  }
}


/**
 * Plus extra points to score
 *
 */
export const plusExtraPoints = (match) => {
  try {
    GameMatch.plusPoints(match, 150)
  } catch (err) {
    throw err
  }
}
