// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

import Navbar from "@/components/Navbar";

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
      <Navbar />
    </>
  );
};

export default Home;
