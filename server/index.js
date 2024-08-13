const express = require("express");
const connectdb = require("./connectdb");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth_Routes");
const userRoutes = require("./routes/user_Routes");
const productRoutes = require("./routes/product_Route");
const adminProductRoutes = require("./routes/admin_Product_Route");
const cartRoutes = require("./routes/cart_Routes");
const cartItemRoutes = require("./routes/cart_Item_Routes");
const orderRoutes = require("./routes/order_Route");
const reviewRoutes = require("./routes/review_Route");
const ratingRoutes = require("./routes/rating_Route");
const adminOrderRotes = require("./routes/admin_Order_Route");

require("dotenv").config();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/admin/products", adminProductRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/cart_items", cartItemRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/ratings", ratingRoutes);
app.use("/api/admin/orders", adminOrderRotes);

connectdb();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
