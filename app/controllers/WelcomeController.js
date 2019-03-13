import BaseController from './BaseController'

class WelcomeController extends BaseController {
  constructor() {
    super()
  }

  welcome(req, res) {
    res.status(200).json('Welcome Whiteaway')
  }
}

export default new WelcomeController()