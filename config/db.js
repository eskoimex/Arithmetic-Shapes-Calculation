const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); 

//const MONGODB_URL = "mongodb://localhost/rubikpay_db"
const MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost/rubikpay_db";

const ConnectMongoServer = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true 
    });
    console.log("Connection to MongoDB successfully established .");
  } catch (e) {
    console.log("Unable to connect to the database:", e);
    throw e;
  }
};

module.exports = ConnectMongoServer;

