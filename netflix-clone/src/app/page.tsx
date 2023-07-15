// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import { axiosInstance } from "@/libs/axiosInstance";

import Navbar from "@/components/Navbar";
import Billboard from "@/components/Billboard";
import Movies from "@/components/Movies";
import Modal from "@/components/Modal";

const getData = async () => {
  const resp = await axiosInstance.get("/random/");
  return resp.data;
};

const Home = async () => {
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

  const movieRandom = await getData();

  return (
    <>
      <Modal />
      <Navbar />
      <Billboard data={movieRandom} />
      <div className="pb-40">
        <Movies />
      </div>
    </>
  );
};

export default Home;
