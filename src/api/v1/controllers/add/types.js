// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const typesOff = require("../../../../models/typesOff");
const connectToDatabase = require("../../../../../config/index");

exports.handler = async (req, res) => {
  try {
    await connectToDatabase();
    if (req.body.name === "" || req.body.name.length > 1000) {
      return res.json({ status: false, msg: "Invalid Type Name", data: null });
    }
    const data = await typesOff.create(req.body);
    if (data) {
      return res.json({ status: true, msg: "Type Added", data: null });
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

exports.getAllTypes = async (req, res) => {
  try {
    const types = await typesOff.find();
    return res.json({ status: true, msg: "All Types Retrieved", data: types });
  } catch (error) {
    return res.json({
      status: false,
      msg: "Something Went Wrong, Try again.....",
      data: error.message,
    });
  }
};
