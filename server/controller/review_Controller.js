const { createReview, getAllReview } = require("../services/review_Service");

const createReviews = async (req, res) => {
  const user = req.user;
  try {
    const review = await createReview(req.body, user);
    return res.status(200).json({ success: true, msg: review });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
const getAllReviews = async (req, res) => {
  const productId = req.params.productId;
  const user = req.user;
  try {
    const review = await getAllReview(productId);
    return res.status(200).json({ success: true, msg: review });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};

module.exports = { createReviews, getAllReviews };
