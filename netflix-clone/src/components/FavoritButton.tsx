"use client";
import { axiosInstance } from "@/libs/axiosInstance";
import { MoviesContext } from "@/providers/MoviesProviders";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface Props {
  movieId: string;
}

const FavoriteButton = ({ movieId }: Props) => {
  const { favorites, handleAddFavorite, handleRemoveFavorite } =
    useContext(MoviesContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const toogleFavorites = async () => {
    try {
      let response;
      if (isFavorite) {
        response = await axiosInstance.delete("/favorites", {
          data: { movieId },
        });
        handleRemoveFavorite(movieId);
      } else {
        response = await axiosInstance.post("/favorites", { movieId });
        handleAddFavorite(movieId);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsFavorite(favorites.includes(movieId));
  }, [movieId, favorites]);

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div
      onClick={toogleFavorites}
      className="cursor-pointer group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300"
    >
      <Icon className="text-white group-hover/item:text-neutral-300 w-4 lg:w-6" />
    </div>
  );
};

export default FavoriteButton;
