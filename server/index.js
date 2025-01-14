const express = require("express");
const dbConnect = require("./config/database");

require("dotenv").config();

const app = express();

app.use(express.json());


app.use("/auth",require("./routes/user"))

app.get("/", async (req, res) => {
  return res.json({
    message: "Hello World",
  });
});

dbConnect();

app.listen(process.env.PORT, () => {
  console.log(`Server Connected POrt With ${process.env.PORT}`);
});
