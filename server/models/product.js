const mongoose = require("mongoose");

const product_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    discountedPrice: {
      type: Number,
    },
    discountedPersent: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    brand: {
      type: String,
    },
    color: {
      type: String,
    },
    sizes: [
      {
        name: { type: String },
        quantity: { type: Number },
      },
    ],
    imageUrl: {
      type: String,
    },
    rating: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "rating",
      },
    ],
    reviews: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "review",
      },
    ],
    numRatings: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "categories",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", product_Schema);

module.exports = Product;
