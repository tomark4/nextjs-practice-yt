"use client";

import LogoutButton from "@/components/LogoutButton";
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

const Home = () => {
  // this apply for components client side
  // const { data: session, status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     return redirect("/auth");
  //   },
  // });

  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      {/* <p className="text-white text-2xl">{JSON.stringify(session)}</p> */}
      <h1 className="text-white text-4xl">Netflix clone</h1>
      <LogoutButton />
    </>
  );
};

export default Home;
