import React from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";

const Profiles = async () => {
  // this apply only for components server side
  // const session = await getServerSession(authOptions);

  // console.log(session);
  // if (session === null) {
  //   redirect("/auth");
  // }

  return (
    <div>
      <p className="text-white text-4xl">Profiles</p>
    </div>
  );
};

export default Profiles;
