const mongoose = require("mongoose")

const mongodbURL = "mongodb+srv://aayush:5CpEW1DHa5qjIjQJ@clusterecommerce.zhgtlkc.mongodb.net/?retryWrites=true&w=majority"

const connectDb = () => {
    return mongoose.connect(mongodbURL);
}

module.exports={connectDb};