import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema(
  {
    content: String,
    startYear: Number,
    tier: String,
    favChar: Boolean,
    reviewer: { type: Schema.Types.ObjectId, ref: "Profile" },
  },
  {
    timestamps: true,
  }
)

const characterSchema = new Schema(
  {
    name: String,
    avatar: String,
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
)

const Character = mongoose.model("Character", characterSchema)
const Review = mongoose.model("Review", reviewSchema)

export { Character, Review }
