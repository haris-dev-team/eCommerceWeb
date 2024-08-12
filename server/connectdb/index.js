const mongoose = require("mongoose");

const connectdb = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.log("Error connecting to MongoDB: ", error);
    });
};

module.exports = connectdb; //export the function
