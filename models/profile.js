import mongoose from "mongoose"

const Schema = mongoose.Schema

const profileSchema = new Schema(
  {
    name: String,
    avatar: String,
    isAdmin: Boolean,
    favChar: { type: Schema.Types.ObjectId, ref: "Character" },
  },
  {
    timestamps: true,
  }
)

const Profile = mongoose.model("Profile", profileSchema)

export { Profile }
