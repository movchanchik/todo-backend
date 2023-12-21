import express from "express";
import routes from "./src/routes/index.js";
import { connectToMongo } from "./src/config/mongoose.js";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(express.json());
app.use(cors);

const port = process.env.PORT || 3001;

app.use("/", routes);

try {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });
} catch (err) {
  console.log("err", err);
  throw err;
}
