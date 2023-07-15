"use client";
import { axiosInstance } from "@/libs/axiosInstance";
import React, { useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

interface Props {
  movieId: string;
  favoriteList: string[];
  onFinishAdd: () => void;
  onFinishRemove: () => void;
}

const FavoriteButton = ({
  movieId,
  favoriteList,
  onFinishAdd,
  onFinishRemove,
}: Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toogleFavorites = async () => {
    try {
      let response;
      if (isFavorite) {
        response = await axiosInstance.delete("/favorites", {
          data: { movieId },
        });
        onFinishRemove();
      } else {
        response = await axiosInstance.post("/favorites", { movieId });
        onFinishAdd();
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    setIsFavorite(favoriteList.includes(movieId));
  }, [movieId, favoriteList]);

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
