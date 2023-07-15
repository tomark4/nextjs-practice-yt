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

export const getFavorites = async (): Promise<Movie[]> => {
  const resp = await axiosInstance.get("/favorites");
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
  const responseFavorites = await getFavorites();
  const favorites = responseFavorites?.map((i) => i._id);

  return (
    <>
      <Navbar />
      <Billboard data={movieRandom} />
      <div className="pb-40">
        <MovieList data={movies} title="Trending now" favorites={favorites} />
        <MovieList
          data={responseFavorites}
          title="My List"
          favorites={favorites}
        />
      </div>
    </>
  );
};

export default Home;
