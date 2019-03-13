import { Router }  from 'express'
import permit from '../util/permission' // middleware for checking if user's role is permitted to make request

import WelcomeController from '../controllers/WelcomeController'
import AuthController from '../controllers/AuthController'

export default class IndexRouter {
  // take the mount path as the constructor argument
  constructor (path = '/') {
    // instantiate the express.Router
    this.router = Router()
    this.path = path
    // glue it all together
    this.init()
  }

  /**
   * Attach route handlers to their endpoints.
   */
  init() {
    this.router.get('/', WelcomeController.welcome)
    this.router.put('/register', AuthController.registerUser)
    this.router.post('/authenticate', AuthController.authenticate)
    this.router.get('/protected', permit(['ADMIN', 'test', 'user']), WelcomeController.welcome)
  }
}
