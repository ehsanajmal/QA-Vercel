const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const category = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

category.plugin(mongoosePaginate);

module.exports = mongoose.model("category", category);
