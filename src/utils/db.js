import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    throw new Error(`Error connecting to MongoDB: ${error}`);
  }
};

export default connect;
