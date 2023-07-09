import mongoose, { Schema, model } from "mongoose";

const verificationTokenSchema = new Schema({
  identifier: { type: String, require: true },
  token: { type: String, unique: true },
  expires: { type: Date },
});

verificationTokenSchema.index({ identifier: 1, token: 1 }, { unique: true });

const VerificationToken =
  mongoose.models.VerificationToken ||
  model("VerifyToken", verificationTokenSchema);

export default VerificationToken;
