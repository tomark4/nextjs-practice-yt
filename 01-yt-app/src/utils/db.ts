import mongoose from "mongoose";

const connect = async () => {
  try {
    let uri = process.env.MONGO;

    if (!uri) {
      throw new Error("Environment not defined");
    }

    await mongoose.connect(uri);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
