import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { db } from "@/libs/database";
import Movie from "@/models/Movie";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { movieId } = await req.json();
    db.connect();

    const existingMovie = await Movie.findOne({ _id: movieId });

    if (!existingMovie) {
      throw new Error("Invalid _ID");
    }

    await User.findOneAndUpdate(
      { email: session?.user?.email },
      { $push: { favoriteIds: movieId } }
    );

    db.disconnect();
    return NextResponse.json(
      { message: "Added to favorites" },
      { status: 200 }
    );
  } catch (e) {
    db.disconnect();
    return NextResponse.json({ error: "Error database", e }, { status: 400 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const { movieId } = await req.json();
    db.connect();

    const existingMovie = await Movie.findOne({ _id: movieId });

    if (!existingMovie) {
      throw new Error("Invalid _ID");
    }

    const user = await User.findOne({ email: session?.user?.email });

    if (!user) {
      throw new Error("User does not exists");
    }

    const updateFavoritesId = user.favoriteIds.filter(
      (item: string) => item !== movieId
    );

    const resp = await User.findOneAndUpdate(
      { email: session?.user?.email },
      { favoriteIds: updateFavoritesId },
      { new: true }
    );

    db.disconnect();

    return NextResponse.json({ resp }, { status: 200 });
  } catch (e) {
    db.disconnect();
    return NextResponse.json(e, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);

  try {
    db.connect();
    const user = await User.findOne({ email: "jotta1@gmail.com" });

    if (!user) {
      throw new Error("User does not exists");
    }

    const favoriteMovies = await Movie.find({ _id: { $in: user.favoriteIds } });

    db.disconnect();

    return NextResponse.json(favoriteMovies, { status: 200 });
  } catch (e) {
    db.disconnect();
    return NextResponse.json(e, { status: 400 });
  }
}
