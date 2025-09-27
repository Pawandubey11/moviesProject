import mongoose from "mongoose";

const showSchema = new mongoose.Schema(
  {
    movie: {
      type: String, // If you use ObjectId: type: mongoose.Schema.Types.ObjectId, ref: "Movie"
      required: true,
    },
    showDateTime: {
      type: Date, // Use Date type instead of String for queries
      required: true,
    },
    showPrice: {
      type: Number,
      required: true,
    },
    occupiedSeats: {
      type: Object, // Better to store seats as an object/map instead of String
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Avoid OverwriteModelError
const Show = mongoose.models.Show || mongoose.model("Show", showSchema);
export default Show;
