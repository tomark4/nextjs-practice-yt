import { NextResponse, NextRequest } from "next/server";

import serverAuth from "@/libs/serverAuth";

// export async function GET(req: NextRequest) {
//   try {
//     const { currentUser } = await serverAuth(req);
//     return NextResponse.json(currentUser, { status: 200 });
//   } catch (e) {
//     console.error(e);
//     return NextResponse.json({ err: e }, { status: 400 });
//   }
// }
