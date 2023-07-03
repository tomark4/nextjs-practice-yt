"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import React from "react";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}) => {
  return (
    <button
      disabled={false}
      type={btnType ?? "button"}
      className={["custom-btn", containerStyles].join(" ")}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
