const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../src/models/userModel");
const login = require("./login");

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const connectToDatabase = require("../config/index");

module.exports = async function handler(req, res) {
  try {
    await connectToDatabase();
    const UserData = await User.findOne({
      email: req.body.email,
    });
    if (UserData) {
      const password = await bcrypt.compare(req.body.password, User.password);
      if (password) {
        const payLoad = {
          id: UserData._id,
          email: UserData.email,
        };
        const token = jwt.sign(payLoad, "thisIsSSSGRoups@!@##", {
          expiresIn: "2h",
        });

        return res.json({
          status: true,
          msg: "Login Successfully",
          data: token,
        });
      }
      return res
        .status(401)
        .json({ status: false, msg: "Invalid Credentials", data: null });
    }
    return res
      .status(401)
      .json({ status: false, msg: "Invalid Credentials", data: null });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, msg: error.message, data: null });
  }
};
