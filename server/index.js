const express = require("express");
const connectdb = require("./connectdb");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth_Routes");
const userRoutes = require("./routes/user_Routes");
require("dotenv").config();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);

connectdb();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
