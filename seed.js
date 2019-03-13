import './app/config/config'
import mongoose from './app/db/mongoose'
import os from 'os'

import User from './app/models/User'

import users from './seeds/users.json'

async function createUsers() {
  for(let index in users) {
    const user = users[index]
    await new User(user).save()
  }
}

mongoose.connection
  .dropDatabase()
  .then(() => createUsers())
  .then(() => { console.log('Database reseted.'); process.exit() })
  .catch((err) => { console.error(err); process.exit() })
