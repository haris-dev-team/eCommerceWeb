const mongoose = require("mongoose")

const dbConnect = () => {
    mongoose.connect(process.env.DB_URI).then(() => {
        console.log("Database connected successdully")
    }).catch((error) => {
        console.log("Database Not Connected!")
    })
}

module.exports = dbConnect