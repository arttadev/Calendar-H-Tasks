import mongoose from "mongoose";

const RegisterSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

export default mongoose.model("users", RegisterSchema);
