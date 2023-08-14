const mongoose = require("mongoose");

const connectToDatabase = async () => {
  if (mongoose.connection.readyState !== 1) {
    await mongoose.connect(
      "mongodb+srv://dataset0548:BkcyL14ZcKQKHPD4@cluster0.ydj5zdz.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected");
  }
  return mongoose.connection;
};
module.exports = connectToDatabase;
