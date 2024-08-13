const Rating = require("../models/rating_Model");
const { findProductById } = require("./product_Service");

const createRating = async (req, user) => {
  const product = await findProductById(req.productId);

  const rating = new Rating({
    product: product._id,
    user: user._id,
    rating: req.rating,
  });

  return await rating.save();
};

const getProductRating = async (productId) => {
  return await Rating.find({ product: productId });
};
module.exports = { createRating, getProductRating };
