const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/noteDb";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to Mongo successfully");
    } catch (error) {
        console.error("Error connecting to Mongo:", error);
    }
};

module.exports = connectToMongo;
