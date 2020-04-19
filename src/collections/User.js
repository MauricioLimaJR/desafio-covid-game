import firebase from '../firebase/firebase'

/**
 * User DB Class
 */
class User {
  constructor() {
    const db = firebase.firestore()
    this.collection = db.collection("users")
  }

  async create(user) {
    /**
     * User data: id(default), instagram, hash, shares
     */

    const { id: userId } = await this.collection.add({ teste: true, ...user})
    return userId
  }

  async getUser(id) {
    const user = await this.collection.doc(id)
    return user
  }

  async getUserByInstagram(instagram) {
    const users = []
    await this.collection
      .where('instagram', '==', instagram)
      .get()
      .then(response => {
        if(!response) return false

        response.forEach(user => {
          users.push({ userId: user.id, ...user.data() })
        })
      })

    await Promise.all(users)
    if (!users[0].id) return false
    return users[0]
  }

}

export default new User()
