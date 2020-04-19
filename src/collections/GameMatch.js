import firebase from '../firebase/firebase'
import User from './User'

/**
 * GameMatch DB Class
 */
class GameMatch {
  constructor() {
    const db = firebase.firestore()
    this.collection = db.collection("matches")
  }

  async create(gameMatch) {
    /**
     * Game match data: id(default) userid, gameid, time,
     * mistakes, score
     */
    const data = { ...gameMatch, createdAt: new Date() }
    const { id: matchId } = await this.collection.add(data);
    return matchId
  }

  async getRanking() {
    const ranking = []

    await this.collection
      .where("score", ">", 0)
      .orderBy("score", "desc")
      .limit(10)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot) throw new Error('Ninguém jogou ainda')

        querySnapshot.forEach(user =>
          ranking.push(user.data()),
        )
      })

    return ranking
  }

  async getRankingByInterval(interval) {
    const ranking = []

    await this.collection
      .where("createdAt", ">", interval)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot) throw new Error('Ninguém jogou ainda')

        querySnapshot.forEach(match =>
          ranking.push(match.data()),
        )
      })

    ranking.sort((a, b) => b.score - a.score)
    return ranking.slice(0, 11)
  }
}

export default new GameMatch()
