"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { City } from "../data";
import { Tape } from "./tape";

interface CityCardProps {
  city: City;
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <div className="relative mx-auto w-full max-w-md cursor-pointer bg-white p-2 shadow-md">
      <div className="relative overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="mb-3 h-48 w-full object-cover"
        />
      </div>
      <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
      <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
      <div className="p-2 text-center">
        <h3 className="font-handwritten text-foreground text-xl font-bold">
          {city.name}
        </h3>
        <p className="text-foreground flex items-center justify-center gap-1 text-sm">
          <MapPin size={14} />
          <span>{city.country}</span>
        </p>
      </div>
    </div>
  );
};

export default CityCard;
