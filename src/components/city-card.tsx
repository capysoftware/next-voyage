"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { City } from "../data";
import { Tape } from "./tape";
import Link from "next/link";
import Image from "next/image";

interface CityCardProps {
  city: City & { id: string };
}

const CityCard: React.FC<CityCardProps> = ({ city }) => {
  return (
    <div className="relative mx-auto w-full max-w-md cursor-pointer bg-white p-2 shadow-md">
      <Link href={`/city/${city.id}`}>
        <div className="relative overflow-hidden">
          <Image
            src={city.image}
            alt={city.name}
            placeholder="blur"
            loading="lazy"
            className="mb-3 h-48 w-full object-cover"
          />
        </div>
        <Tape className="absolute top-0 -left-4 -translate-y-1/2 -rotate-12" />
        <Tape className="absolute top-0 -right-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
        <div className="p-2 text-center">
          <h3 className="font-handwritten text-foreground text-xl font-bold">
            {city.name}
          </h3>
          <p className="text-foreground flex items-center justify-center gap-1 text-sm">
            <MapPin className="size-3.5" />
            <span>{city.country}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CityCard;
