// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const answer = require("../../../../models/answer");
const multiAnswer = require("../../../../models/multiAnswer");
const connectToDatabase = require("../../../../../config/index");

async function handler(req, res) {
  try {
    await connectToDatabase();
    for (let i = 0; i < req.body.length; i++) {
      if (req.body[i].main.name === "" || req.body.name[i].main.length > 1000) {
        return res.json({
          status: false,
          msg: "Invalid Answer Name",
          data: null,
        });
        break;
      }
      if (
        req.body[i].questionId === "" ||
        req.body[i].questionId.length > 1000
      ) {
        return res.json({
          status: false,
          msg: "Invalid Question Id",
          data: null,
        });
        break;
      }
    }

    for (let i = 0; i < req.body.length; i++) {
      const dataInsert = {
        questionId: req.body[i].questionId,
        name: req.body[i].name,
      };
      const data = await answer.create(dataInsert);
      if (data) {
        if (req.body[i].multi.length > 0) {
          await multiAnswer.insertMany(req.body[i].multi);
        }
      }
    }
    return res.json({ status: true, msg: "Answer Added", data: null });
  } catch (error) {
    return res.json({
      status: false,
      msg: "Something Went Wrong, Try again.....",
      data: error.message,
    });
  }
}

module.exports = handler;
