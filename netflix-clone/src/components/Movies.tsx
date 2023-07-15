"use client";
import { MoviesContext } from "@/providers/MoviesProviders";
import React, { useContext } from "react";
import MovieList from "./MovieList";

const Movies = () => {
  const { movies, favoriteMovies, status } = useContext(MoviesContext);

  if (status === "loading") {
    return (
      <div className="flex justify-center h-40 items-center  mt-10">
        <h1 className="text-2xl text-white">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <MovieList title="Trending now" data={movies} />
      <MovieList title="My List" data={favoriteMovies} />
    </div>
  );
};

export default Movies;
