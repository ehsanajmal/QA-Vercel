const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const answer = mongoose.Schema(
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

answer.plugin(mongoosePaginate);

module.exports = mongoose.model("answer", answer);
