import { Tape } from "@/components/tape";
import { attractions, cities } from "@/data";
import { ArrowLeft, MapPin } from "lucide-react";
import Link from "next/link";
import CityAttractions from "./components/city-attractions";

interface CityDetailsPageProps {
  params: Promise<{ id: number }>;
}

export default async function CityDetailsPage({
  params,
}: CityDetailsPageProps) {
  const { id } = await params;

  const city = cities[id - 1];

  const cityAttractions = attractions.filter((a) => a.cityId === city.id);

  if (!city) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">City not found</h2>
          <Link href="/" className="text-blue-600 hover:underline">
            Return to home page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Link
        href="/"
        className="font-handwritten text-scrapbook-text mb-6 inline-flex items-center transition-colors hover:text-amber-700"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to all cities
      </Link>

      <div className="relative mx-auto mb-12 max-w-4xl bg-white p-8 shadow-sm">
        <Tape className="absolute top-1 -left-4 -translate-y-1/2 -rotate-12" />
        <Tape className="absolute top-1 -right-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -bottom-4 -left-4 -translate-y-1/2 rotate-12" />
        <Tape className="absolute -right-4 -bottom-4 -translate-y-1/2 -rotate-12" />

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="md:w-1/2">
            <img
              src={city.image}
              alt={city.name}
              className="h-64 w-full rounded-md object-cover shadow-md"
            />
          </div>

          <div className="md:w-1/2">
            <div className="mb-2 flex items-start">
              <h1 className="font-handwritten text-scrapbook-text text-3xl font-bold">
                {city.name}
              </h1>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <MapPin className="size-4 text-red-500" />
              <span className="font-handwritten pt-1">{city.country}</span>
            </div>

            <p className="font-handwritten text-scrapbook-text">
              {city.description}
            </p>
          </div>
        </div>
      </div>

      <h2 className="font-handwritten text-scrapbook-text mb-8 text-center text-2xl font-bold">
        Top Attractions in {city.name}
      </h2>

      <CityAttractions cityAttractions={cityAttractions} />
    </>
  );
}
