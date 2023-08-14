// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const category = require("../../../../models/category");
const connectToDatabase = require("../../../../../config/index");

exports.handler = async (req, res) => {
  try {
    await connectToDatabase();
    if (req.body.name === "" || req.body.name.length > 1000) {
      return res.json({
        status: false,
        msg: "Invalid Category Name",
        data: null,
      });
    }
    const data = await category.create(req.body);
    if (data) {
      return res.json({ status: true, msg: "Category Added", data: null });
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

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await category.find();
    return res.json({
      status: true,
      msg: "All Categories Retrieved",
      data: categories,
    });
  } catch (error) {
    return res.json({
      status: false,
      msg: "Something Went Wrong, Try again.....",
      data: error.message,
    });
  }
};
