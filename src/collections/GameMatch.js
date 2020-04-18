import firebase from '../firebase/firebase'

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
    const data = { ...gameMatch, createdAt: Date.now() }
    const { id: matchId } = await this.collection.add(data);
    return matchId
  }

}

export default new GameMatch()
