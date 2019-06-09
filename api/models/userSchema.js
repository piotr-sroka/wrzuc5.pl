import mongoose from "mongoose";

let Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: "Enter valid email"
  },
  password: {
    type: String,
    required: "Enter valid password"
  }
});

export default mongoose.model("User", UserSchema);
