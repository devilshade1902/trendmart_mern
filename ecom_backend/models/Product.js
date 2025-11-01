import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  old_price: Number,
  stock: Number,
  gender: String,
  category: String,
  sizes: [String],
  image_url: String,
  rating: String,
  brand: String,
  description: String,
  is_new: Boolean,
  arrival_date: String,
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;
