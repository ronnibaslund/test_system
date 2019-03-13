import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true
  },
  permission: {
    type: String,
    required: false,
    minlength: 1,
    trim: true
  }
})

export default mongoose.model('User', userSchema)
