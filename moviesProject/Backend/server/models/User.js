import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Avoid OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
