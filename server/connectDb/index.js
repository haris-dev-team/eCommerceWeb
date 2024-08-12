const mongoose = require("mongoose");

const connect_to_database = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("mongoose Error",error);
    });
};

module.exports = connect_to_database;
