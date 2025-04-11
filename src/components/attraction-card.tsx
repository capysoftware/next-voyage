"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import { Attraction, categories } from "../data";
import { Tape } from "./tape";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface AttractionCardProps {
  attraction: Attraction;
  isSelected: boolean;
  setSelectedAttractions: Dispatch<SetStateAction<Attraction[]>>;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  isSelected,
  setSelectedAttractions,
}) => {
  const attractionCategories = attraction.categories.map(
    (c) => categories[c - 1],
  );

  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-md flex-col border bg-white p-3 shadow-md transition duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:cursor-pointer",
        { "border-blue-400": isSelected },
      )}
      onClick={() => {
        setSelectedAttractions((prev) => {
          if (prev.some((a) => a.id === attraction.id)) {
            return prev.filter((a) => a.id !== attraction.id);
          }
          return [...prev, attraction];
        });
      }}
    >
      <div className="relative">
        <Image
          src={attraction.image}
          alt={attraction.name}
          placeholder="blur"
          className="mb-3 h-80 w-full object-cover"
          loading="lazy"
        />
      </div>
      <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
      <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
      <div className="grid flex-1 p-2">
        <h3 className="font-handwritten text-lg font-bold">
          {attraction.name}
        </h3>

        <div className="mb-3 flex flex-wrap gap-2">
          {attractionCategories.map((category) => (
            <Badge
              key={category.id}
              className="text-foreground"
              style={{
                backgroundColor: category.color,
              }}
            >
              {category.name}
            </Badge>
          ))}
        </div>

        <p className="font-handwritten mb-3 line-clamp-3 text-sm">
          {attraction.description}
        </p>
        <div className="font-handwritten mb-2 flex items-start gap-1 text-xs text-gray-600">
          <div className="flex h-[1lh] items-center">
            <MapPin className="size-3" />
          </div>
          <p className="pt-0.5">{attraction.address}</p>
        </div>
        <Button size="lg" asChild className="text-md mt-auto flex items-center">
          <a
            href={attraction.googleMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-handwritten"
          >
            <span className="mt-1">View on Google Maps</span> <ExternalLink />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default AttractionCard;
