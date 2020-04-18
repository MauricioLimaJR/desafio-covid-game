import firebase from '../firebase'

/**
 * Game DB Class
 */
class Game {
  db = firebase.firestore();

  async create(game) {
    /**
     * Game data: id(default), title
     */
    await this.db.collection("match").add(game);
  }

}

export default new Game()
