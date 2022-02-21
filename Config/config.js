const mongoose = require("mongoose");
require("dotenv").config();
const contactMongoose = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("server is contact with DB");
  } catch (error) {
    console.log("db is not connect");
  }
};
module.exports = contactMongoose;
