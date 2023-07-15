import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";
import { db } from "@/libs/database";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await db.connect();
    const { email, name, password } = await req.json();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        {
          error: "Email taken!",
        },
        { status: 422 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,
      name,
      hashedPassword,
      image: "",
      emailVerify: new Date(),
    });

    user.save();
    await db.disconnect();
    return NextResponse.json(
      {
        message: "Sign up success!",
        user: { email, name, id: user._id, emailVerify: user.emailVerify },
      },
      { status: 200 }
    );
  } catch (e: any) {
    console.error(e);
    await db.disconnect();
    return NextResponse.json({ error: e }, { status: 400 });
  }
}
