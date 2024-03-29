import express from "express";
import Color from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connDb from "./Config/connectDb.js";
import authRoute from "./Routes/authRoutes.js";
import cors from "cors";
// dit env call
dotenv.config();
// database config
connDb();

// Express call
const app = express();
// middleWere Morgan
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// All routes
app.use("/api/v1/auth", authRoute);
// app get
app.get("/", (req, res) => {
  res.send("<h1>This is Ecommerece app</h1>");
});

// app PORT
const PORT = process.env.ENV_PORT || 1011;

// call port
app.listen(PORT, () => {
  console.log(
    `Hello we are listening you on ${process.env.ENV_PORT} port and have ${process.env.ENV_MODE} mode.`
      .bgBlue.white
  );
});
