import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

import serverAuth from "@/libs/serverAuth";

export async function GET(req: NextApiRequest) {
  try {
    const { currentUser } = await serverAuth(req);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ err: e }, { status: 400 });
  }
}
