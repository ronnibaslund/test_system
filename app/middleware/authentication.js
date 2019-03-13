import '../config/config'
import jwt from 'jsonwebtoken'
const jwtSignature = process.env.jwtSignature

// middleware for authentication
export default async function authorize(req, res, next) {
  if(req.originalUrl === '/authenticate' || req.originalUrl === '/register') {
    next()
  } else {  
    try {
      const token = req.headers.authorization.replace('Bearer ', '')

      let validToken = await jwt.verify(token, jwtSignature)

      // set user on-success
      req.user = { role: validToken.permission } //await req.db.users.findByApiKey(apiToken);
      
      // always continue to next middleware
      next()
    } catch(e) {
      console.log('token is not valid!')
      res.status(403).json({ success: false, message: 'Invalid token!' })
    }
  }
}