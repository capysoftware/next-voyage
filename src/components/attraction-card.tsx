"use client";
import React from "react";
import { ExternalLink, MapPin } from "lucide-react";
import { Attraction, categories } from "../data";
import { Tape } from "./tape";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const attractionCategories = attraction.categories.map(
    (c) => categories[c - 1],
  );

  return (
    <div className="relative mx-auto flex max-w-md flex-col bg-white p-3 shadow-md">
      <div className="relative">
        <img
          loading="lazy"
          src={attraction.image}
          alt={attraction.name}
          className="mb-3 h-80 w-full object-cover"
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
