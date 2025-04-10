import CityCard from "@/components/city-card";
import { cities } from "@/data";

export default function Home() {
  return (
    <>
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <div className="bubble-pattern relative mb-8 inline-block bg-white p-4 px-8 pt-8 shadow-md">
          <h1 className="font-handwritten mb-4 text-4xl font-bold">
            Your Travel Adventure Awaits!
          </h1>
          <p className="font-handwritten text-lg">
            Explore beautiful cities around the world and discover their amazing
            attractions
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <p className="font-handwritten mb-8 text-lg">
            Click on any city below to start your journey and explore the top
            attractions, from historical landmarks to natural wonders and hidden
            gems.
          </p>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 gap-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cities.map((c) => (
          <CityCard key={c.id} city={c} />
        ))}
      </div>
    </>
  );
}
