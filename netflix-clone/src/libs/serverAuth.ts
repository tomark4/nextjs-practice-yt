import { getSession } from "next-auth/react";
import { NextApiRequest } from "next";

import User from "@/models/User";

const serverAuth = async (req: NextApiRequest) => {
  const session = await getSession({ req });

  if (!session?.user?.email) {
    throw new Error("Not signed in");
  }

  const currentUser = await User.findOne({ email: session.user.email });

  if (!currentUser) {
    throw new Error("Not signed");
  }

  return { currentUser };
};

export default serverAuth;
