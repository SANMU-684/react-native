import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    stock: { type: Number, default: 0 },
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const Product = mongoose.models.Product ?? mongoose.model("Product", ProductSchema);
