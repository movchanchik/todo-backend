import express from "express";
import "dotenv/config";
import cors from "cors";
const app = express();
import routes from "./src/routes/index.js";
import { connectToMongo } from "./src/config/mongoose.js";

//Middleware
app.use(express.json());
app.use(cors());

app.use("/", routes);

const port = process.env.PORT || 3000;

try {
  await connectToMongo();
  app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });
} catch (error) {
  console.log(error);
  throw err;
}
