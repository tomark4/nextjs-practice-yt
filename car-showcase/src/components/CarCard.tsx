"use client";
import React from "react";

interface Props {
  car: Object;
}

const CarCard = ({ car }: Props) => {
  console.log(car);
  return <div>Car card</div>;
};

export default CarCard;
