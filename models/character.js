import mongoose from 'mongoose'

const Schema = mongoose.Schema

const replySchema = new Schema({
  content: String,
  reviewer: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true
})
const reviewSchema = new Schema({
  content: String,
  reviewer: { type: Schema.Types.ObjectId, ref: 'Profile' },
  replies: [replySchema,]
}, {
  timestamps: true
})
const characterSchema = new Schema({
  name: String,
  reviews: [reviewSchema],
  avatar: String,
}, {
  timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)

export {
  Character,
}
