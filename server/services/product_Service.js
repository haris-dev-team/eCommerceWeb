const Category = require("../models/category");
const Product = require("../models/product");

const createProduct = async (reqData) => {
  try {
    // Check or create top-level category
    let topLevel = await Category.findOne({ name: reqData.topLevelCategory });
    if (!topLevel) {
      topLevel = new Category({
        name: reqData.topLevelCategory,
        level: 1,
      });
      await topLevel.save();
    }

    // Check or create second-level category
    let secondLevel = await Category.findOne({
      name: reqData.secondLevelCategory,
      parentCategory: topLevel._id,
    });
    if (!secondLevel) {
      secondLevel = new Category({
        name: reqData.secondLevelCategory,
        parentCategory: topLevel._id,
        level: 2,
      });
      await secondLevel.save();
    }

    // Check or create third-level category
    let thirdLevel = await Category.findOne({
      name: reqData.thirdLevelCategory,
      parentCategory: secondLevel._id,
    });
    if (!thirdLevel) {
      thirdLevel = new Category({
        name: reqData.thirdLevelCategory,
        parentCategory: secondLevel._id,
        level: 3,
      });
      await thirdLevel.save();
    }

    // Create the product
    const product = new Product({
      title: reqData.title,
      color: reqData.color,
      description: reqData.description,
      discountedPrice: reqData.discountedPrice,
      discountedPercent: reqData.discountedPercent,
      imageUrl: reqData.imageUrl,
      brand: reqData.brand,
      price: reqData.price,
      sizes: reqData.size,
      quantity: reqData.quantity,
      category: thirdLevel._id,
    });

    // Save the product and return it
    return await product.save();
  } catch (error) {
    console.error("Error creating product:", error.message);
    throw new Error("Failed to create product");
  }
};

const deleteProduct = async (productId) => {
  const product = await findProductById(productId);
  await Product.findByIdAndDelete(productId);
  return "product deleted successfully!";
};

const updateProduct = async (productId, reqData) => {
  return await Product.findByIdAndUpdate(productId, reqData);
};

const findProductById = async (id) => {
  const product = await Product.findById(id).populate("category").exec();

  if (!product) {
    throw new Error("Product not Fonud With Id");
  }
  return product;
};

const getAllProducts = async (reqQuery) => {
  let {
    category,
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    sort,
    stock,
    pageNumber = 1,
    pageSize = 10,
  } = reqQuery;

  try {
    let query = Product.find().populate("category");

    // Filter by category
    if (category) {
      const existCategory = await Category.findOne({ name: category });
      console.log("Category found:", existCategory, category);
      if (existCategory) {
        query = query.where("category").equals(existCategory._id);
      } else {
        // Return empty results if the category doesn't exist
        return { content: [], currentPage: 1, totalPages: 0 };
      }
    }

    // Filter by color
    if (color) {
      const colorSet = new Set(
        color.split(",").map((c) => c.trim().toLowerCase())
      );
      if (colorSet.size > 0) {
        const colorRegex = new RegExp([...colorSet].join("|"), "i");
        query = query.where("color").regex(colorRegex);
      }
    }

    // Filter by sizes
    if (sizes) {
      const sizeSet = new Set(sizes.split(",").map((size) => size.trim()));
      if (sizeSet.size > 0) {
        query = query.where("sizes.name").in([...sizeSet]);
      }
    }

    // Filter by price range
    if (minPrice !== undefined && maxPrice !== undefined) {
      query = query.where("discountedPrice").gte(minPrice).lte(maxPrice);
    }

    // Filter by minimum discount
    if (minDiscount) {
      query = query.where("discountedPercent").gt(minDiscount);
    }

    // Filter by stock status
    if (stock) {
      if (stock === "in_stock") {
        query = query.where("quantity").gt(0);
      } else if (stock === "out_of_stock") {
        query = query.where("quantity").lte(0);
      }
    }

    // Sort by price
    if (sort) {
      const sortDirection = sort === "price_high" ? -1 : 1;
      query = query.sort({ discountedPrice: sortDirection });
    }

    // Pagination
    const totalProducts = await Product.countDocuments(query);
    const skip = (pageNumber - 1) * pageSize;
    query = query.skip(skip).limit(pageSize);

    const products = await query.exec();
    const totalPages = Math.ceil(totalProducts / pageSize);

    return { content: products, currentPage: pageNumber, totalPages };
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw new Error("Failed to fetch products");
  }
};

const createMultipleProducts = async (products) => {
  for (let product of products) {
    await createProduct(product);
  }
};

module.exports = {
  createProduct,
  createMultipleProducts,
  getAllProducts,
  deleteProduct,
  updateProduct,
  findProductById,
};
