const Review = require("../models/review");
const { findProductById } = require("./product_Service");

const createReview = async (reqData, user) => {
  const product = await findProductById(reqData, productId);

  const review = new Review({
    user: user._id,
    product: product._id,
    review: reqData.review,
  });

  await product.save();
  return await review.save();
};

const getAllReview = async (productId) => {
  const product = await findProductById(reqData.productId);
  return await Review.find({ product: productId }).populate("user");
};

module.exports = { createReview, getAllReview };
