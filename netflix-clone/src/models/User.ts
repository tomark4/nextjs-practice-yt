import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    image: { type: String },
    email: { type: String, unique: true },
    emailVerify: { type: Date },
    hashedPassword: { type: String, select: false },
    favoriteIds: { type: [String] },
    sessions: [{ type: Schema.Types.ObjectId, ref: "Session" }],
    accounts: [{ type: Schema.Types.ObjectId, ref: "Account" }],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJson = function () {
  const obj = this.toObject();
  delete obj.hashedPassword;
  return obj;
};

const User = mongoose.models.User || model("User", userSchema);

export default User;
