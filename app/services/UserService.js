import User from '../models/User'

class UserService {
  async fetchByEmail(email) {
    return await User.findOne({ email: email })
  }

  /**
   * Create a new user
   * @param {*} user 
   */
  async create (user) {
    if(!user.hasOwnProperty('permission')) {
      user.permission = 'USER'
    }

    return await new User(user).save()
  }
}

export default new UserService()
