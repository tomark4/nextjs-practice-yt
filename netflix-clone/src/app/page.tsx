// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";
import { axiosInstance } from "@/libs/axiosInstance";

import Navbar from "@/components/Navbar";
import { Movie } from "@/interfaces/Movie";
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";

export const getData = async (): Promise<Movie> => {
  const resp = await axiosInstance.get("/random/");
  return resp.data;
};

export const getMovies = async (): Promise<Movie[]> => {
  const resp = await axiosInstance.get("/movies");
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
  const movies = await getMovies();

  return (
    <>
      {/* <p className="text-white text-2xl">{JSON.stringify(session)}</p> */}
      <Navbar />
      <Billboard data={movieRandom} />
      <div className="pb-40">
        <MovieList data={movies} title="News" />
      </div>
    </>
  );
};

export default Home;
