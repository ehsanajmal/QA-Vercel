const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const typesOff = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Type Name is Required"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

typesOff.plugin(mongoosePaginate);

module.exports = mongoose.model("typesOff", typesOff);
