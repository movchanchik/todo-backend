import express from "express";
import cors from "cors";
const app = express();
import routes from "./src/routes/index.js";
import bodyParser from "body-parser";
import { connectToMongo } from "./src/config/mongoose.js";

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/", routes);

try {
  await connectToMongo();
  app.listen(4000, () => {
    console.log(`server is running on port: 4000`);
  });
} catch (error) {
  console.log(error);
  throw err;
}
