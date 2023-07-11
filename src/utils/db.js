import mongoose from "mongoose";
// require("dotenv").config();
const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://anouar1994:123456789az@cluster0.sywgc.mongodb.net/lamadev?retryWrites=true&w=majority"
    );
  } catch (error) {
    throw new Error("connection failed");
  }
};

export default connect;
