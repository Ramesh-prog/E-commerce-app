import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: { type: Date, default: Date.now },
});

export const User = mongoose.model("User", userSchema);

// in model we write our model name is "User" , but when we execute it it will store in our database bu the form of "users"