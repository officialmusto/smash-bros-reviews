import mongoose from 'mongoose'

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  email: String,
  googleId: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

const Review = mongoose.model('Review', reviewSchema)

export {
  Review
}
