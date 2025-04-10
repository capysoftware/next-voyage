"use client";
import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { Attraction, categories } from "../data";
import { Tape } from "./tape";

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const attractionCategories = attraction.categories.map(
    (c) => categories[c - 1],
  );

  return (
    <div className="relative mx-auto max-w-md bg-white p-3 shadow-md">
      <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
      <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
      <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />
      <div className="relative">
        <img
          src={attraction.image}
          alt={attraction.name}
          className="mb-3 h-48 w-full object-cover"
          onError={(e) => {
            // Fallback to placeholder image if the original image fails to load
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";
          }}
        />
      </div>
      <div className="p-2">
        <h3 className="font-handwritten mb-1 text-lg font-bold">
          {attraction.name}
        </h3>

        <div className="mb-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < attraction.rating
                  ? "fill-yellow-500 text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
        </div>

        <p className="font-handwritten mb-3 line-clamp-3 text-sm">
          {attraction.description}
        </p>

        <div className="mb-3 flex flex-wrap gap-2">
          {attractionCategories.map((category) => (
            <span
              key={category.id}
              className="rounded-full px-4 py-2 text-xs font-semibold shadow-sm"
              style={{ backgroundColor: category.color }}
            >
              {category.name}
            </span>
          ))}
        </div>

        <div className="font-handwritten mb-2 text-xs text-gray-600">
          <p>{attraction.address}</p>
        </div>

        <a
          href={attraction.googleMapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-handwritten inline-flex w-full items-center justify-center rounded-md bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700"
        >
          See Directions <ExternalLink size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default AttractionCard;
