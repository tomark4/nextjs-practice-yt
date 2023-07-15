import { NextRequest, NextResponse } from "next/server";
// import * as movies from "../../../data/movies.json";
import Movie from "@/models/Movie";
import { db } from "@/libs/database";

export async function GET(req: NextRequest) {
  try {
    db.connect();
    const movies = await Movie.find({});
    const randomIndex = Math.floor(Math.random() * movies.length);
    const movie = movies[randomIndex];
    db.disconnect();
    return NextResponse.json(movie, { status: 200 });
  } catch (e) {
    db.disconnect();
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
