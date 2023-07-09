import mongoose, { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  videoUrl: { type: String, require: true },
  thumbnailUrl: { type: String, require: true },
  genre: { type: String, require: true },
  duration: { type: String, require: true },
});

const Movie = mongoose.models.Movie || model("Movie", movieSchema);

export default Movie;
