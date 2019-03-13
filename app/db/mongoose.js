import mongoose from 'mongoose'
import logger from '../util/logger'

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI).catch(e => logger.excepton(e))

export default mongoose