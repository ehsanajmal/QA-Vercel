const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();
const connectToDatabase = require("./config/index");
connectToDatabase();

const answerRoutes = require("./src/api/v1/routes/answer");
const categoriesRoutes = require("./src/api/v1/routes/categories");
const questionRoutes = require("./src/api/v1/routes/question");
const typesRoutes = require("./src/api/v1/routes/types");
const authRoutes = require("./src/api/v1/routes/authRoutes");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/answer", answerRoutes);
app.use("/api/v1/categories", categoriesRoutes);
app.use("/api/v1/question", questionRoutes);
app.use("/api/v1/types", typesRoutes);
app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
