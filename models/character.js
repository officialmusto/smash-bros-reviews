import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
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
