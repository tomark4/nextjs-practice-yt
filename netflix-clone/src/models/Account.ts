import mongoose, { Schema, model } from "mongoose";

const accountSchema = new Schema({
  userId: { type: String, require: true },
  type: { type: String, require: true },
  provider: { type: String, require: true },
  providerAccountId: { type: String, require: true },
  refresh_token: { type: String },
  access_token: { type: [String] },
  expires_at: { type: Number },
  scope: { type: String },
  id_token: { type: String },
  session_state: { type: String },
  user: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Account = mongoose.models.Account || model("Account", accountSchema);

export default Account;
