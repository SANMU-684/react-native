import mongoose, { Schema } from "mongoose";

const PostSchema = new Schema(
  {
    authorId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post ?? mongoose.model("Post", PostSchema);
