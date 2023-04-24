import mongoose from 'mongoose'

const Schema = mongoose.Schema

const replySchema = new Schema({
  content: String,
  avatar: String,
}, {
  timestamps: true,
})

const Reply = mongoose.model('Review', replySchema)

export {
  Reply
}
