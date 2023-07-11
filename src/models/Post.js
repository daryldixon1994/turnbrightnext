import mongoose from "mongoose";
const Schema = mongoose.Schema;
const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type:   String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.Post || mongoose.model("Post", postSchema);
