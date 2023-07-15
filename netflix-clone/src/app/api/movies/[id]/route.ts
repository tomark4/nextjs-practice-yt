import { db } from "@/libs/database";
import Movie from "@/models/Movie";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (typeof params.id !== "string") {
      return NextResponse.json({ message: "Not valid id" });
    }

    db.connect();

    const movie = await Movie.findById(params.id);

    if (!movie) {
      return NextResponse.json({ message: "Movie id not found" });
    }

    db.disconnect();
    return NextResponse.json(movie, { status: 200 });
  } catch (e: any) {
    console.log(e);
    db.disconnect();
    return NextResponse.json(
      { message: e.reason.stack || "Something went wrong" },
      { status: 400 }
    );
  }
}
