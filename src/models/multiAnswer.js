const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const multiAnswer = mongoose.Schema(
  {
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "question",
    },
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

multiAnswer.plugin(mongoosePaginate);

module.exports = mongoose.model("multiAnswer", multiAnswer);
