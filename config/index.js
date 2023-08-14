const mongoose = require("mongoose");

const connectToDatabase = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect("mongodb://localhost:27017/node", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  }
  return mongoose.connection;
};
module.exports = connectToDatabase;
