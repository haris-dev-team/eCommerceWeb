const mongoose = require("mongoose");

const review_Schema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("review", review_Schema);

module.exports = Review;
