const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const question = mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
    },
    name: {
      type: String,
      required: [true, "name is required"],
      unique: true,
    },
    type: {
      type: String,
      required: [true, "Question type is required"],
    },
  },
  {
    timestamps: true,
  }
);

question.plugin(mongoosePaginate);

module.exports = mongoose.model("question", question);
