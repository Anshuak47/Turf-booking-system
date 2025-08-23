import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `Mongoose DB connected! DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Connection not successfull ${error}`);
  }
};

export default connectDB;
