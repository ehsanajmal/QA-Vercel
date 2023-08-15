// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const question = require("../../../../models/question");
const connectToDatabase = require("../../../../../config/index");

exports.handler = async (req, res) => {
  try {
    await connectToDatabase();
    if (req.body.name === "" || req.body.name.length > 1000) {
      return res.json({
        status: false,
        msg: "Invalid Question Name",
        data: null,
      });
    }
   
    if (req.body.categoryId === "" || req.body.categoryId.length > 1000) {
      return res.json({
        status: false,
        msg: "Invalid Category Id",
        data: null,
      });
    }
    const data = await question.create(req.body);
    if (data) {
      return res.json({ status: true, msg: "Question Added", data: null });
    } else {
      return res.json({
        status: false,
        msg: "Something Went Wrong, Try again.....",
        data: null,
      });
    }
  } catch (error) {
    return res.json({
      status: false,
      msg: "Something Went Wrong, Try again.....",
      data: error.message,
    });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await question.find();
    return res.json({
      status: true,
      msg: "All Questions Retrieved",
      data: questions,
    });
  } catch (error) {
    return res.json({
      status: false,
      msg: "Something Went Wrong, Try again.....",
      data: error.message,
    });
  }
};
