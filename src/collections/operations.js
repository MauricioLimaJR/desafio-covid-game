import User from './User'
import GameMatch from './GameMatch'

export const SaveMatch = async (user, match) => {
  try {
    const userId = await User.create(user)
    if (!userId) throw new Error('Failed creating new user')

    await GameMatch.create(
      { gameId: 'basico', userId, ...match }
    )
  } catch (err) {
    throw err
  }

}
