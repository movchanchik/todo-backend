import mongoose from "mongoose";
import "dotenv/config";

export const connectToMongo = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL ||
        "mongodb+srv://inna0992:SZXNvMemsb4BKEYf@cluster0.ufmdkfg.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Sucessfully connected to mongo");
  } catch (err) {
    console.log("err", err);
    throw err;
  }
};
