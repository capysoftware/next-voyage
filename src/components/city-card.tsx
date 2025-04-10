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
    <div className="relative w-full max-w-md bg-white p-2 shadow-md transition-all duration-300 hover:scale-[1.03] hover:rotate-0">
      <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
      <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
      <div className="relative overflow-hidden">
        <img
          src={city.image}
          alt={city.name}
          className="mb-3 h-48 w-full object-cover"
          onError={(e) => {
            // Fallback to placeholder image if the original image fails to load
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";
          }}
        />
      </div>
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
