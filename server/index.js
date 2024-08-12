const express = require("express");
const connectdb = require("./connectdb");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
connectdb();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
