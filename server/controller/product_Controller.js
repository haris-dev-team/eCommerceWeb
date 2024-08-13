const {
  createProduct,
  deleteProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  createMultipleProducts,
} = require("../services/product_Service");

const createProducts = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    return res.status(200).json({ success: true, msg: product });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const deleteProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await deleteProduct(productId);
    return res.status(200).json({ success: true, msg: product });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const updateProducts = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await updateProduct(productId, req.body);
    return res.status(200).json({ success: true, msg: product });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const findProductsById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await findProductById(productId);
    return res.status(200).json({ success: true, msg: product });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

const getAllProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await getAllProducts(req.query);
    return res.status(200).json({ success: true, msg: product });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};
const createMultipleProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await createMultipleProducts(req.body);
    return res
      .status(200)
      .json({ success: true, msg: "Products Created Successfully!" });
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

module.exports = {
  createProducts,
  updateProducts,
  findProductsById,
  getAllProduct,
  createMultipleProduct,
  deleteProducts,
};
