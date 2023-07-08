import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/libs/prismadb";

export async function POST(req: NextRequest) {
  try {
    const { email, name, password } = await req.json();

    console.log(req.body);

    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email token",
        },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: { email, name, hashedPassword, image: "", emailVerify: new Date() },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 400 });
  }
}
