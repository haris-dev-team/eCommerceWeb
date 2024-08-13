const { createReview, getAllReview } = require("../services/review_Service");

const createRatings = async (req, res) => {
  const user = req.user;
  try {
    const review = await createRatings(req.body, user);
    return res.status(200).json({ success: true, msg: review });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
const getAllRatings = async (req, res) => {
  const productId = req.params.productId;
  const user = req.user;
  try {
    const review = await getAllRatings(productId);
    return res.status(200).json({ success: true, msg: review });
  } catch (error) {
    return res.status(500).json({ success: false, msg: error.message });
  }
};
module.exports = { createRatings, getAllRatings }; //exporting the functions
