import mongoose, { Schema, model, Model } from "mongoose";

const sessionSchema = new Schema({
  sessionToken: { type: String, require: true },
  userId: { type: String },
  expires: { type: Date },
  user: { type: mongoose.Types.ObjectId, ref: "User" },
});

const Session =
  mongoose.models.Session || model("SessionSession", sessionSchema);

export default Session;
