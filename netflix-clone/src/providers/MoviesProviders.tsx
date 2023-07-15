"use client";
import { Movie } from "@/interfaces/Movie";
import { axiosInstance } from "@/libs/axiosInstance";
import React, { useCallback, useEffect, useState } from "react";
import { createContext } from "react";

interface MoviesContextI {
  movies: Movie[];
  favoriteMovies: Movie[];
  favorites: string[];
  status: "loading" | "ready";
  handleAddFavorite: (id: string) => void;
  handleRemoveFavorite: (id: string) => void;
}

export const MoviesContext = createContext({} as MoviesContextI);

const MoviesProviders = ({ children }: any) => {
  const [favoriteMovies, setFavoritesMovies] = useState<Movie[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [status, setStatus] = useState<"loading" | "ready">("loading");

  const getMovies = useCallback(async () => {
    try {
      const resp = await axiosInstance.get("/movies");
      setMovies(resp.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getFavorites = useCallback(async () => {
    try {
      const resp = await axiosInstance.get("/favorites");
      setFavoritesMovies(resp.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    setFavorites(favoriteMovies?.map((i) => i._id));
  }, [favoriteMovies]);

  const handleAddFavorite = (id: string) => {
    setFavorites([...favorites, id]);
  };

  const handleRemoveFavorite = (id: string) => {
    const newData = favorites.filter((i) => i !== id);
    setFavorites(newData);
  };

  useEffect(() => {
    async function fetchData() {
      await getFavorites();
      await getMovies();
      setStatus("ready");
    }

    fetchData();
  }, [getFavorites, getMovies]);

  useEffect(() => {
    getFavorites();
  }, [favorites, getFavorites]);

  return (
    <MoviesContext.Provider
      value={{
        movies,
        favoriteMovies,
        favorites,
        status,
        handleAddFavorite,
        handleRemoveFavorite,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export default MoviesProviders;
