import AttractionCard from "@/components/attraction-card";
import CityCard from "@/components/city-card";
import { attractions, cities } from "@/data";

export default function Home() {
  return (
    <div>
      <CityCard city={cities[0]} />
      <AttractionCard attraction={attractions[0]} />
    </div>
  );
}
