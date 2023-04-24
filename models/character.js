import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  avatar: String,
  content: String,
  startYear: Number,
  tier: String,
  favChar: Boolean,
}, {
  timestamps: true,
})

const characterSchema = new Schema({
  name: String,
  reviews: [reviewSchema],
  avatar: String,
}, {
  timestamps: true,
})

const Character = mongoose.model('Character', characterSchema)
const Review = mongoose.model('Review', reviewSchema)

export {
  Character,
  Review,
}
