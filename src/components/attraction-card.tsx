"use client";
import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { Attraction, categories } from "../data";
import { Tape } from "./tape";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface AttractionCardProps {
  attraction: Attraction & { id: string };
  isSelecting: boolean;
  isSelected: boolean;
  setSelectedAttractions: Dispatch<
    SetStateAction<(Attraction & { id: string })[]>
  >;
}

const AttractionCard: React.FC<AttractionCardProps> = ({
  attraction,
  isSelecting,
  isSelected,
  setSelectedAttractions,
}) => {
  const attractionCategories = attraction.categories.map((id) => ({
    ...categories[id],
    id,
  }));

  return (
    <div
      className={cn(
        "relative mx-auto flex max-w-md flex-col border-4 border-transparent bg-white p-3 shadow-md",
        { "border-black": isSelected && isSelecting },
        {
          "transition duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:cursor-pointer":
            isSelecting,
        },
      )}
      onClick={() => {
        if (isSelecting) {
          setSelectedAttractions((prev) => {
            if (prev.some((a) => a.id === attraction.id)) {
              return prev.filter((a) => a.id !== attraction.id);
            }
            return [...prev, attraction];
          });
        }
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

        <p className="font-handwritten line-clamp-3 text-sm">
          {attraction.description}
        </p>
      </div>
    </div>
  );
};

export default AttractionCard;
