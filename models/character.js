import mongoose from 'mongoose'

const Schema = mongoose.Schema

const characterSchema = new Schema({
  name: String,
  content: String,
  avatar: String,
}, {
  timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character
}
