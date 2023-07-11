import { db } from "@/libs/database";
import Movie from "@/models/Movie";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    db.connect();

    const movies = await Movie.find({});

    db.disconnect();
    return NextResponse.json(movies, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
  }
}
