import type { StaticImageData } from "next/image";
import Vancouver from "@/images/city/vancouver.jpeg";
import Toronto from "@/images/city/toronto.jpeg";
import NewYorkCity from "@/images/city/new-york-city.jpeg";
import SanFrancisco from "@/images/city/san-francisco.jpeg";
import Seattle from "@/images/city/seattle.jpeg";
import LosAngeles from "@/images/city/los-angeles.jpeg";
import Tokyo from "@/images/city/tokyo.jpeg";
import Seoul from "@/images/city/seoul.jpeg";

// Vancouver attractions
import StanleyPark from "@/images/attractions/vancouver/stanley-park.jpeg";
import CapilanoSuspensionBridge from "@/images/attractions/vancouver/capilano-suspension-bridge.jpeg";
import GranvilleIsland from "@/images/attractions/vancouver/granville-island.jpeg";
import VancouverAquarium from "@/images/attractions/vancouver/vancouver-aquarium.webp";
import MuseumOfAnthropology from "@/images/attractions/vancouver/moa.jpg";
import GrouseMountain from "@/images/attractions/vancouver/grouse-mountain.jpeg";
import SunYatSenGarden from "@/images/attractions/vancouver/dr-sun-yat-sen-garden.jpg";
import EnglishBayBeach from "@/images/attractions/vancouver/english-bay-beach.jpg";
import ScienceWorld from "@/images/attractions/vancouver/science-world.jpeg";
import GastownSteamClock from "@/images/attractions/vancouver/gastown.jpeg";

// Toronto attractions
import CNTower from "@/images/attractions/toronto/cn-tower.jpeg";
import RoyalOntarioMuseum from "@/images/attractions/toronto/royal-ontario-museum.jpeg";
import RipleysAquarium from "@/images/attractions/toronto/ripleys-aquarium.jpg";
import TorontoIslands from "@/images/attractions/toronto/toronto-islands.jpeg";
import DistilleryDistrict from "@/images/attractions/toronto/the-distillery-historic-district.jpeg";
import CasaLoma from "@/images/attractions/toronto/casa-loma.jpeg";
import HighPark from "@/images/attractions/toronto/high-park.jpg";
import ArtGalleryOfOntario from "@/images/attractions/toronto/art-gallery-of-ontario.jpeg";
import StLawrenceMarket from "@/images/attractions/toronto/st-lawrence-market.jpeg";
import KensingtonMarket from "@/images/attractions/toronto/kensington-market.jpeg";

// New York City attractions
import EmpireStateBuilding from "@/images/attractions/new-york-city/empire-state-building.jpeg";
import StatueOfLiberty from "@/images/attractions/new-york-city/statue-of-liberty.jpeg";
import CentralPark from "@/images/attractions/new-york-city/central-park.jpeg";
import MetropolitanMuseum from "@/images/attractions/new-york-city/metropolitan-museum-of-art.jpeg";
import TimesSquare from "@/images/attractions/new-york-city/times-square.jpeg";
import BrooklynBridge from "@/images/attractions/new-york-city/brooklyn-bridge.jpeg";
import Memorial911 from "@/images/attractions/new-york-city/9-11-memorial-museum.jpeg";
import HighLine from "@/images/attractions/new-york-city/high-line.jpeg";
import AmericanMuseumOfNaturalHistory from "@/images/attractions/new-york-city/american-museum-history.jpeg";
import FifthAvenue from "@/images/attractions/new-york-city/fifth-avenue.jpeg";

// San Francisco attractions
import GoldenGateBridge from "@/images/attractions/san-francisco/golden-gate-bridge.jpeg";
import AlcatrazIsland from "@/images/attractions/san-francisco/alcatraz-island.jpeg";
import FishermansWharf from "@/images/attractions/san-francisco/fishermans-wharf.jpeg";
import Chinatown from "@/images/attractions/san-francisco/chinatown.jpeg";
import LombardStreet from "@/images/attractions/san-francisco/lombard-st.jpeg";
import GoldenGatePark from "@/images/attractions/san-francisco/golden-gate-park.jpg";
import PalaceOfFineArts from "@/images/attractions/san-francisco/palace-of-fine-arts.jpeg";
import TwinPeaks from "@/images/attractions/san-francisco/twin-peaks.jpeg";
import Pier39 from "@/images/attractions/san-francisco/pier-39.jpg";
import PaintedLadies from "@/images/attractions/san-francisco/painted-ladies.jpg";
import VercelHeadquarters from "@/images/attractions/san-francisco/vercel-hq.jpeg";
// Seattle attractions
import SpaceNeedle from "@/images/attractions/seattle/space-needle.jpeg";
import PikePlaceMarket from "@/images/attractions/seattle/pike-place-market.jpeg";
import ChihulyGarden from "@/images/attractions/seattle/chihuly-garden-and-glass.jpeg";
import MoPOP from "@/images/attractions/seattle/mopop.jpg";
import OlympicSculpturePark from "@/images/attractions/seattle/olympic-sculpture-park.jpeg";
import SeattleAquarium from "@/images/attractions/seattle/seattle-aquarium.jpeg";
import KerryPark from "@/images/attractions/seattle/kerry-park.jpeg";
import WoodlandPark from "@/images/attractions/seattle/woodland-park.jpg";
import MuseumOfFlight from "@/images/attractions/seattle/museum-of-flight.jpeg";
import GasWorksPark from "@/images/attractions/seattle/gas-works-park.jpeg";

// Los Angeles attractions
import UniversalStudios from "@/images/attractions/los-angeles/universal-studios-hollywood.jpeg";
import HollywoodWalkOfFame from "@/images/attractions/los-angeles/hollywood-walk-of-fame.jpeg";
import GriffithObservatory from "@/images/attractions/los-angeles/griffith-observatory.jpeg";
import SantaMonicaPier from "@/images/attractions/los-angeles/santa-monica-pier.jpeg";
import GettyCenter from "@/images/attractions/los-angeles/the-getty-center.jpeg";
import VeniceBeach from "@/images/attractions/los-angeles/venice-beach-boardwalk.jpeg";
import HollywoodSign from "@/images/attractions/los-angeles/hollywood-sign.jpeg";
import LACMA from "@/images/attractions/los-angeles/lacma.jpeg";
import TheGrove from "@/images/attractions/los-angeles/the-grove.jpg";
import RunyonCanyon from "@/images/attractions/los-angeles/runyon-canyon-park.jpg";

// Tokyo attractions
import TokyoSkytree from "@/images/attractions/tokyo/tokyo-skytree.jpeg";
import MeijiShrine from "@/images/attractions/tokyo/meji-shrine.jpeg";
import SensojiTemple from "@/images/attractions/tokyo/senso-ji-temple.jpeg";
import ShibuyaCrossing from "@/images/attractions/tokyo/shibuya-crossing.jpeg";
import TokyoDisneyland from "@/images/attractions/tokyo/tokyo-disneyland.jpeg";
import ImperialPalace from "@/images/attractions/tokyo/tokyo-imperial-park.jpeg";
import UenoPark from "@/images/attractions/tokyo/ueno-park.jpeg";
import Akihabara from "@/images/attractions/tokyo/akihabara-electric-town.jpeg";
import Harajuku from "@/images/attractions/tokyo/harajuku.jpeg";
import ShinjukuGyoen from "@/images/attractions/tokyo/shinjuku-gyoen-national-garden.jpg";

// Seoul attractions
import GyeongbokgungPalace from "@/images/attractions/seoul/gyeongbokgung-palace.jpeg";
import NamsanTower from "@/images/attractions/seoul/namsan-tower.jpeg";
import BukchonHanokVillage from "@/images/attractions/seoul/bukchon-hanok-village.jpeg";
import Myeongdong from "@/images/attractions/seoul/myeongdong.jpeg";
import LotteWorld from "@/images/attractions/seoul/lotte-world.jpg";
import ChangdeokgungPalace from "@/images/attractions/seoul/changdeokgung-palace.jpeg";
import DongdaemunDesignPlaza from "@/images/attractions/seoul/dongdaemun-design-plaza.jpg";
import Insadong from "@/images/attractions/seoul/insadong.jpeg";
import YeouidoHangangPark from "@/images/attractions/seoul/yeouido-hangang-park.jpg";
import StarfieldLibrary from "@/images/attractions/seoul/starfield-library.jpeg";

interface City {
  id: number;
  name: string;
  country: string;
  description: string;
  image: StaticImageData;
}

const cities: City[] = [
  {
    id: 1,
    name: "Vancouver",
    country: "Canada",
    description:
      "A bustling west coast seaport in British Columbia, Vancouver is among Canada's densest, most ethnically diverse cities, surrounded by mountains and natural beauty.",
    image: Vancouver,
  },
  {
    id: 2,
    name: "Toronto",
    country: "Canada",
    description:
      "Canada's largest city and a multicultural hub for arts, culture, finance, and technology.",
    image: Toronto,
  },
  {
    id: 3,
    name: "New York City",
    country: "United States",
    description:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean, and is known for its iconic skyline, arts scene, and cultural diversity.",
    image: NewYorkCity,
  },
  {
    id: 4,
    name: "San Francisco",
    country: "United States",
    description:
      "San Francisco, a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay, is known for its iconic Golden Gate Bridge, cable cars, and colorful Victorian houses.",
    image: SanFrancisco,
  },
  {
    id: 5,
    name: "Seattle",
    country: "United States",
    description:
      "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and home to thousands of acres of parkland.",
    image: Seattle,
  },
  {
    id: 6,
    name: "Los Angeles",
    country: "United States",
    description:
      "Los Angeles is a sprawling Southern California city and the center of the nation's film and television industry, with studios such as Paramount Pictures, Universal and Warner Brothers.",
    image: LosAngeles,
  },
  {
    id: 7,
    name: "Tokyo",
    country: "Japan",
    description:
      "Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    image: Tokyo,
  },
  {
    id: 8,
    name: "Seoul",
    country: "South Korea",
    description:
      "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.",
    image: Seoul,
  },
];

interface Category {
  id: number;
  name: string;
  color: string;
}

const categories: Category[] = [
  { id: 1, name: "museum", color: "#E5DEFF" },
  { id: 2, name: "park", color: "#F2FCE2" },
  { id: 3, name: "landmark", color: "#FEF7CD" },
  { id: 4, name: "historical", color: "#FDE1D3" },
  { id: 5, name: "nature", color: "#D3E4FD" },
  { id: 6, name: "shopping", color: "#FFDEE2" },
  { id: 7, name: "entertainment", color: "#E5DEFF" },
  { id: 8, name: "religious", color: "#F2FCE2" },
  { id: 9, name: "beach", color: "#FEF7CD" },
  { id: 10, name: "budget friendly", color: "#FDE1D3" },
  { id: 11, name: "food", color: "#D3E4FD" },
  { id: 12, name: "architecture", color: "#FFDEE2" },
  { id: 13, name: "viewpoint", color: "#E5DEFF" },
  { id: 14, name: "cultural", color: "#F2FCE2" },
];

interface Attraction {
  id: number;
  cityId: number;
  name: string;
  description: string;
  address: string;
  googleMapUrl: string;
  rating: number;
  image: StaticImageData;
  categories: number[];
}

const attractions: Attraction[] = [
  // Vancouver Attractions
  {
    id: 1,
    cityId: 1,
    name: "Stanley Park",
    description:
      "A magnificent 405-hectare public park that borders downtown Vancouver and is almost entirely surrounded by waters of Vancouver Harbour and English Bay.",
    address: "Vancouver, BC V6G 1Z4, Canada",
    googleMapUrl: "https://maps.app.goo.gl/e6RrFyrDx4TPLg2p9",
    rating: 5,
    image: StanleyPark,
    categories: [2, 3, 5, 10],
  },
  {
    id: 2,
    cityId: 1,
    name: "Capilano Suspension Bridge",
    description:
      "A simple suspension bridge crossing the Capilano River with a cliff walk & treetop adventure through rainforest.",
    address: "3735 Capilano Rd, North Vancouver, BC V7R 4J1, Canada",
    googleMapUrl: "https://maps.app.goo.gl/TBEsQAgKZHte3JgH8",
    rating: 4.6,
    image: CapilanoSuspensionBridge,
    categories: [3, 5, 7],
  },
  {
    id: 3,
    cityId: 1,
    name: "Granville Island",
    description:
      "Peninsula and shopping district known for its public market, art studios, and marina.",
    address: "Granville Island, Vancouver, BC, Canada",
    googleMapUrl: "https://maps.app.goo.gl/wAw3spBfsYJp7JRY9",
    rating: 4.7,
    image: GranvilleIsland,
    categories: [6, 7, 10, 11],
  },
  {
    id: 4,
    cityId: 1,
    name: "Vancouver Aquarium",
    description:
      "A public aquarium located in Stanley Park that is a center for marine research, conservation and marine animal rehabilitation.",
    address: "845 Avison Way, Vancouver, BC V6G 3E2, Canada",
    googleMapUrl: "https://maps.app.goo.gl/wrT8gEehjYE7o5Rc9",
    rating: 4.5,
    image: VancouverAquarium,
    categories: [7, 10, 5],
  },
  {
    id: 5,
    cityId: 1,
    name: "Museum of Anthropology",
    description:
      "A museum featuring an extensive collection of world arts and cultures with a special emphasis on the First Nations of British Columbia.",
    address: "6393 NW Marine Dr, Vancouver, BC V6T 1Z2, Canada",
    googleMapUrl: "https://maps.app.goo.gl/tDPBKe3TtXWWH5Qi8",
    rating: 4.7,
    image: MuseumOfAnthropology,
    categories: [1, 4, 14],
  },
  {
    id: 6,
    cityId: 1,
    name: "Grouse Mountain",
    description:
      "A mountain with panoramic views of Vancouver, outdoor activities and wildlife refuge.",
    address: "6400 Nancy Greene Way, North Vancouver, BC V7R 4K9, Canada",
    googleMapUrl: "https://maps.app.goo.gl/Hx1TJA5GZcbE7B8X6",
    rating: 4.5,
    image: GrouseMountain,
    categories: [5, 7, 13],
  },
  {
    id: 7,
    cityId: 1,
    name: "Dr. Sun Yat-Sen Classical Chinese Garden",
    description:
      "The first Chinese garden built outside of China, featuring traditional architecture and design.",
    address: "578 Carrall St, Vancouver, BC V6B 5K2, Canada",
    googleMapUrl: "https://maps.app.goo.gl/BNKKFmvSH3rdTgqr7",
    rating: 4.2,
    image: SunYatSenGarden,
    categories: [4, 8, 12, 14],
  },
  {
    id: 8,
    cityId: 1,
    name: "English Bay Beach",
    description:
      "A popular beach area in downtown Vancouver known for swimming, sunbathing, and watching sunsets.",
    address: "1700 Beach Ave, Vancouver, BC V6G 1Y7, Canada",
    googleMapUrl: "https://maps.app.goo.gl/Dvvdkx9oAmxYT532A",
    rating: 4.7,
    image: EnglishBayBeach,
    categories: [5, 9, 10],
  },
  {
    id: 9,
    cityId: 1,
    name: "Science World",
    description:
      "An interactive science center featuring exhibits, demonstrations, and shows for all ages.",
    address: "1455 Quebec St, Vancouver, BC V6A 3Z7, Canada",
    googleMapUrl: "https://maps.app.goo.gl/MLpXv4JuSU7MJtxAA",
    rating: 4.5,
    image: ScienceWorld,
    categories: [1, 7, 10],
  },
  {
    id: 10,
    cityId: 1,
    name: "Gastown Steam Clock",
    description:
      "Built in 1977, this well-known, antique-style clock is powered by steam & whistles to tell the time.",
    address: "305 Water St, Vancouver, BC V6B 1B9, Canada",
    googleMapUrl: "https://maps.app.goo.gl/mRexvzXXHQuNRbWi9",
    rating: 4.5,
    image: GastownSteamClock,
    categories: [4, 6, 11, 12],
  },

  // Toronto Attractions
  {
    id: 11,
    cityId: 2,
    name: "CN Tower",
    description:
      "A 553.3 m-high concrete communications and observation tower in downtown Toronto, offering spectacular views of the city.",
    address: "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
    googleMapUrl: "https://maps.app.goo.gl/knBKTREwPwH7yXED9",
    rating: 4.6,
    image: CNTower,
    categories: [3, 7, 13],
  },
  {
    id: 12,
    cityId: 2,
    name: "Royal Ontario Museum",
    description:
      "Canada's largest museum with world culture and natural history collections.",
    address: "100 Queens Park, Toronto, ON M5S 2C6, Canada",
    googleMapUrl: "https://maps.app.goo.gl/E2EoqmZN8NbymmSS8",
    rating: 4.7,
    image: RoyalOntarioMuseum,
    categories: [1, 4, 14],
  },
  {
    id: 13,
    cityId: 2,
    name: "Ripley's Aquarium of Canada",
    description:
      "A public aquarium featuring a diverse collection of marine life and interactive exhibits.",
    address: "288 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
    googleMapUrl: "https://maps.app.goo.gl/RceJ4sY9yc5JoHXs5",
    rating: 4.6,
    image: RipleysAquarium,
    categories: [7, 10],
  },
  {
    id: 14,
    cityId: 2,
    name: "Toronto Islands",
    description:
      "A group of small islands offering beaches, parks, and recreational activities, providing a scenic escape from the city.",
    address: "Toronto Islands, Toronto, ON, Canada",
    googleMapUrl: "https://maps.app.goo.gl/Q9cq48xzevZMyc9w8",
    rating: 4.7,
    image: TorontoIslands,
    categories: [2, 5, 9, 10],
  },
  {
    id: 15,
    cityId: 2,
    name: "The Distillery Historic District",
    description:
      "A collection of boutiques, galleries, cafes & restaurants takes the place of a former distillery.",
    address: "55 Mill St, Toronto, ON M5A 3C4, Canada",
    googleMapUrl: "https://maps.app.goo.gl/w9RPtbPWGaouEMce8",
    rating: 4.6,
    image: DistilleryDistrict,
    categories: [4, 6, 11, 12],
  },
  {
    id: 16,
    cityId: 2,
    name: "Casa Loma",
    description:
      "A Gothic Revival style mansion and garden that is now a museum and landmark.",
    address: "1 Austin Terrace, Toronto, ON M5R 1X8, Canada",
    googleMapUrl: "https://maps.app.goo.gl/uejtQPEJjEDQXQ4C7",
    rating: 4.5,
    image: CasaLoma,
    categories: [3, 4, 12],
  },
  {
    id: 17,
    cityId: 2,
    name: "High Park",
    description:
      "A large urban park featuring hiking trails, sports facilities, and a zoo.",
    address: "1873 Bloor St W, Toronto, ON M6R 2Z3, Canada",
    googleMapUrl: "https://maps.app.goo.gl/622X7D16qNqo2GX66",
    rating: 4.7,
    image: HighPark,
    categories: [2, 5, 10],
  },
  {
    id: 18,
    cityId: 2,
    name: "Art Gallery of Ontario",
    description:
      "One of the largest art museums in North America with a collection of more than 90,000 works.",
    address: "317 Dundas St W, Toronto, ON M5T 1G4, Canada",
    googleMapUrl: "https://maps.app.goo.gl/QiBBxFBsbcNAnpre6",
    rating: 4.7,
    image: ArtGalleryOfOntario,
    categories: [1, 12, 14],
  },
  {
    id: 19,
    cityId: 2,
    name: "St. Lawrence Market",
    description:
      "A historic market complex dating back to 1803, offering food, art, and specialty products.",
    address: "93 Front St E, Toronto, ON M5E 1C3, Canada",
    googleMapUrl: "https://maps.app.goo.gl/2P8cvHCLztyA9pP19",
    rating: 4.6,
    image: StLawrenceMarket,
    categories: [6, 11, 10],
  },
  {
    id: 20,
    cityId: 2,
    name: "Kensington Market",
    description:
      "A multicultural neighborhood known for its eclectic mix of shops, restaurants, and street art.",
    address: "Kensington Market, Toronto, ON, Canada",
    googleMapUrl: "https://maps.app.goo.gl/mJnRUqNVMfyGSdDZA",
    rating: 4.1,
    image: KensingtonMarket,
    categories: [6, 11, 14],
  },

  // New York City Attractions
  {
    id: 21,
    cityId: 3,
    name: "Empire State Building",
    description:
      "An iconic 102-story skyscraper completed in 1931, offering panoramic views from its observation decks.",
    address: "20 W 34th St, New York, NY 10001, USA",
    googleMapUrl: "https://maps.app.goo.gl/do6VhLwabwYjXisQ6",
    rating: 4.7,
    image: EmpireStateBuilding,
    categories: [3, 12, 13],
  },
  {
    id: 22,
    cityId: 3,
    name: "Statue of Liberty",
    description:
      "A colossal neoclassical sculpture on Liberty Island in New York Harbor, a symbol of freedom and the United States.",
    address: "Liberty Island, New York, NY 10004, USA",
    googleMapUrl: "https://maps.app.goo.gl/RzzvhmKfPg1vT5g19",
    rating: 4.7,
    image: StatueOfLiberty,
    categories: [3, 4, 10],
  },
  {
    id: 23,
    cityId: 3,
    name: "Central Park",
    description:
      "An 843-acre urban park in Manhattan, offering recreational activities, gardens, and attractions.",
    address: "Central Park, New York, NY, USA",
    googleMapUrl: "https://maps.app.goo.gl/3uwqnyQD6tA2Ynpq8",
    rating: 4.8,
    image: CentralPark,
    categories: [2, 5, 10],
  },
  {
    id: 24,
    cityId: 3,
    name: "Metropolitan Museum of Art",
    description:
      "One of the world's largest and most prestigious art museums, housing an extensive collection spanning 5,000 years.",
    address: "1000 5th Ave, New York, NY 10028, USA",
    googleMapUrl: "https://maps.app.goo.gl/n1uZZ88mcgzc1BEj9",
    rating: 4.8,
    image: MetropolitanMuseum,
    categories: [1, 4, 14],
  },
  {
    id: 25,
    cityId: 3,
    name: "Times Square",
    description:
      "A major commercial intersection and neighborhood known for its bright lights, Broadway theaters, and as a symbol of New York City.",
    address: "Manhattan, NY 10036, USA",
    googleMapUrl: "https://maps.app.goo.gl/3gkZWurFZbGnWdHM6",
    rating: 4.7,
    image: TimesSquare,
    categories: [3, 6, 7],
  },
  {
    id: 26,
    cityId: 3,
    name: "Brooklyn Bridge",
    description:
      "A hybrid cable-stayed/suspension bridge spanning the East River between Manhattan and Brooklyn.",
    address: "Brooklyn Bridge, New York, NY 10038, USA",
    googleMapUrl: "https://maps.app.goo.gl/kchww5gGNKzFxCJE8",
    rating: 4.8,
    image: BrooklynBridge,
    categories: [3, 4, 12],
  },
  {
    id: 27,
    cityId: 3,
    name: "One World Trade Center & 9/11 Memorial",
    description:
      "The main building of the rebuilt World Trade Center complex and a memorial commemorating the September 11, 2001 attacks.",
    address: "180 Greenwich St, New York, NY 10007, USA",
    googleMapUrl: "https://maps.app.goo.gl/q6Ev6MvK9PYLxQPJA",
    rating: 4.8,
    image: Memorial911,
    categories: [3, 4, 13],
  },
  {
    id: 28,
    cityId: 3,
    name: "High Line",
    description:
      "A 1.45-mile-long elevated linear park built on a former freight rail line on the west side of Manhattan.",
    address: "New York, NY 10011, USA",
    googleMapUrl: "https://maps.app.goo.gl/UspySPcKCpZpugQY6",
    rating: 4.7,
    image: HighLine,
    categories: [2, 10, 12],
  },
  {
    id: 29,
    cityId: 3,
    name: "American Museum of Natural History",
    description:
      "One of the largest natural history museums in the world, with 45 permanent exhibition halls.",
    address: "200 Central Park West, New York, NY 10024, USA",
    googleMapUrl: "https://maps.app.goo.gl/Dedc9qy4sWAg8ZQ1A",
    rating: 4.5,
    image: AmericanMuseumOfNaturalHistory,
    categories: [1, 10, 14],
  },
  {
    id: 30,
    cityId: 3,
    name: "Fifth Avenue",
    description:
      "A major thoroughfare known for its luxury shops, museums, and historic landmarks.",
    address: "Fifth Avenue, New York, NY, USA",
    googleMapUrl: "https://maps.app.goo.gl/ma2KE4YTy5K3RA2R6",
    rating: 4.7,
    image: FifthAvenue,
    categories: [6, 12],
  },

  // San Francisco Attractions
  {
    id: 31,
    cityId: 4,
    name: "Golden Gate Bridge",
    description:
      "An iconic suspension bridge spanning the Golden Gate strait, connecting San Francisco Bay and the Pacific Ocean.",
    address: "Golden Gate Bridge, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/fiVT5PRLjWjPKnyz9",
    rating: 4.8,
    image: GoldenGateBridge,
    categories: [3, 12, 13],
  },
  {
    id: 32,
    cityId: 4,
    name: "Alcatraz Island",
    description:
      "A historic former federal prison located on an island in San Francisco Bay.",
    address: "Alcatraz Island, San Francisco, CA 94133, USA",
    googleMapUrl: "https://maps.app.goo.gl/VKwcyLQvqvm4WbvRA",
    rating: 4.7,
    image: AlcatrazIsland,
    categories: [3, 4, 10],
  },
  {
    id: 33,
    cityId: 4,
    name: "Fisherman's Wharf",
    description:
      "A popular tourist attraction with seafood restaurants, souvenir shops, and sea lion viewing.",
    address: "Fisherman's Wharf, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/3wNf5TgeX8jgw1Bs5",
    rating: 4.1,
    image: FishermansWharf,
    categories: [3, 6, 11],
  },
  {
    id: 34,
    cityId: 4,
    name: "Chinatown",
    description:
      "The oldest and one of the largest Chinatowns in North America, featuring authentic cuisine, shops, and cultural attractions.",
    address: "Chinatown, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/s36iJ3CtpA4xBpWj7",
    rating: 3.9,
    image: Chinatown,
    categories: [6, 11, 14],
  },
  {
    id: 35,
    cityId: 4,
    name: "Lombard Street",
    description:
      "Known as the 'crookedest street in the world,' this one-block section features eight hairpin turns.",
    address: "Lombard Street, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/KmZPhgXdeiVLq4bXA",
    rating: 4.6,
    image: LombardStreet,
    categories: [3, 10, 12],
  },
  {
    id: 36,
    cityId: 4,
    name: "Golden Gate Park",
    description:
      "A large urban park spanning over 1,000 acres, featuring gardens, museums, and recreational facilities.",
    address: "Golden Gate Park, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/zsDNXGV4JezhLDV46",
    rating: 4.6,
    image: GoldenGatePark,
    categories: [2, 5, 10],
  },
  {
    id: 37,
    cityId: 4,
    name: "Palace of Fine Arts",
    description:
      "A monumental structure built for the 1915 Panama-Pacific Exposition, featuring a classical rotunda and colonnades.",
    address: "3601 Lyon St, San Francisco, CA 94123, USA",
    googleMapUrl: "https://maps.app.goo.gl/wHhmhSEZN1Njtz1X6",
    rating: 4.8,
    image: PalaceOfFineArts,
    categories: [3, 4, 12],
  },
  {
    id: 38,
    cityId: 4,
    name: "Twin Peaks",
    description:
      "Two adjacent peaks offering panoramic views of the San Francisco Bay Area.",
    address: "501 Twin Peaks Blvd, San Francisco, CA 94114, USA",
    googleMapUrl: "https://maps.app.goo.gl/actrZDdvvNuKXnGE6",
    rating: 4.6,
    image: TwinPeaks,
    categories: [5, 10, 13],
  },
  {
    id: 39,
    cityId: 4,
    name: "PIER 39",
    description:
      "Bustling bayside pier featuring scenic views, sea lion sightings, eateries, shops & entertainment.",
    address: "Powell-Hyde Cable Car, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/LwKFM7kRVK5WyJyD7",
    rating: 4.6,
    image: Pier39,
    categories: [3, 7, 10],
  },
  {
    id: 40,
    cityId: 4,
    name: "Painted Ladies",
    description:
      "A row of colorful Victorian houses facing Alamo Square Park, famously featured in movies and TV shows.",
    address: "Steiner St & Hayes St, San Francisco, CA 94117, USA",
    googleMapUrl: "https://maps.app.goo.gl/jP9Mu2Xo5QrWRfff9",
    rating: 4.4,
    image: PaintedLadies,
    categories: [3, 4, 12],
  },
  {
    id: 41,
    cityId: 4,
    name: "Vercel Headquarters",
    description:
      "Vercel specializes in cloud platform services that enhance the web development and deployment process.",
    address: "650 California St, SF, CA 94108",
    googleMapUrl: "https://maps.app.goo.gl/jP9Mu2Xo5QrWRfff9",
    rating: 4.4,
    image: VercelHeadquarters,
    categories: [1, 12, 14],
  },
  // Seattle Attractions
  {
    id: 42,
    cityId: 5,
    name: "Space Needle",
    description:
      "An observation tower built for the 1962 World's Fair, offering 360-degree views of Seattle and its surroundings.",
    address: "400 Broad St, Seattle, WA 98109, USA",
    googleMapUrl: "https://maps.app.goo.gl/cM3swBcntk1qdqqdA",
    rating: 4.6,
    image: SpaceNeedle,
    categories: [3, 7, 13],
  },
  {
    id: 43,
    cityId: 5,
    name: "Pike Place Market",
    description:
      "A historic public market overlooking the Elliott Bay waterfront, known for its fresh produce, crafts, and the original Starbucks.",
    address: "85 Pike St, Seattle, WA 98101, USA",
    googleMapUrl: "https://maps.app.goo.gl/mDioFwDJvrjVrpDH9",
    rating: 4.5,
    image: PikePlaceMarket,
    categories: [6, 11, 10],
  },
  {
    id: 44,
    cityId: 5,
    name: "Chihuly Garden and Glass",
    description:
      "An exhibit showcasing the studio glass of Dale Chihuly, featuring a garden, glasshouse, and interior galleries.",
    address: "305 Harrison St, Seattle, WA 98109, USA",
    googleMapUrl: "https://maps.app.goo.gl/Lx82BpLt16BKNiXZ9",
    rating: 4.7,
    image: ChihulyGarden,
    categories: [1, 12, 14],
  },
  {
    id: 45,
    cityId: 5,
    name: "Museum of Pop Culture (MoPOP)",
    description:
      "A nonprofit museum dedicated to contemporary popular culture, music, science fiction, and more.",
    address: "325 5th Ave N, Seattle, WA 98109, USA",
    googleMapUrl: "https://maps.app.goo.gl/1AsNFKH2R24r8sSK9",
    rating: 4.6,
    image: MoPOP,
    categories: [1, 7, 14],
  },
  {
    id: 46,
    cityId: 5,
    name: "Olympic Sculpture Park",
    description:
      "A nine-acre public park featuring outdoor sculptures and a beach along the waterfront.",
    address: "2901 Western Ave, Seattle, WA 98121, USA",
    googleMapUrl: "https://maps.app.goo.gl/vauvNNSrZ7ALPESP6",
    rating: 4.5,
    image: OlympicSculpturePark,
    categories: [2, 12, 10],
  },
  {
    id: 47,
    cityId: 5,
    name: "Seattle Aquarium",
    description:
      "A public aquarium located on Pier 59 on the Elliott Bay waterfront, featuring marine exhibits.",
    address: "1483 Alaskan Way, Seattle, WA 98101, USA",
    googleMapUrl: "https://maps.app.goo.gl/gC9VnxxGowdrhUG47",
    rating: 4.3,
    image: SeattleAquarium,
    categories: [7, 10, 5],
  },
  {
    id: 48,
    cityId: 5,
    name: "Kerry Park",
    description:
      "A small park offering one of the most photographed views of Seattle's skyline, Mount Rainier, and Elliott Bay.",
    address: "211 W Highland Dr, Seattle, WA 98119, USA",
    googleMapUrl: "https://maps.app.goo.gl/BD7kuZCPr82rMm4A8",
    rating: 4.8,
    image: KerryPark,
    categories: [2, 10, 13],
  },
  {
    id: 49,
    cityId: 5,
    name: "Woodland Park Zoo",
    description:
      "A zoological garden featuring wildlife from around the world and award-winning naturalistic exhibits.",
    address: "5500 Phinney Ave N, Seattle, WA 98103, USA",
    googleMapUrl: "https://maps.app.goo.gl/CLJYYPDgVdyE4u759",
    rating: 4.6,
    image: WoodlandPark,
    categories: [5, 7, 10],
  },
  {
    id: 50,
    cityId: 5,
    name: "Museum of Flight",
    description:
      "One of the largest air and space museums in the world, with over 175 aircraft and spacecraft on display.",
    address: "9404 E Marginal Way S, Seattle, WA 98108, USA",
    googleMapUrl: "https://maps.app.goo.gl/gxVMoXuET6R69kWe6",
    rating: 4.8,
    image: MuseumOfFlight,
    categories: [1, 4, 10],
  },
  {
    id: 51,
    cityId: 5,
    name: "Gas Works Park",
    description:
      "A public park on the site of the former Seattle Gas Light Company gasification plant, offering views of Lake Union and the Seattle skyline.",
    address: "2101 N Northlake Way, Seattle, WA 98103, USA",
    googleMapUrl: "https://maps.app.goo.gl/PXPYww2YCuZzvJzQ8",
    rating: 4.7,
    image: GasWorksPark,
    categories: [2, 4, 13],
  },

  // Los Angeles Attractions
  {
    id: 52,
    cityId: 6,
    name: "Universal Studios Hollywood",
    description:
      "A film studio and theme park offering behind-the-scenes tours of movie sets and thrilling rides based on popular films.",
    address: "100 Universal City Plaza, Universal City, CA 91608, USA",
    googleMapUrl: "https://maps.app.goo.gl/PaGWiv4KuGBRY3bR6",
    rating: 4.6,
    image: UniversalStudios,
    categories: [7, 3],
  },
  {
    id: 53,
    cityId: 6,
    name: "Hollywood Walk of Fame",
    description:
      "A historic landmark featuring more than 2,600 stars embedded in the sidewalks along Hollywood Boulevard, honoring achievements in the entertainment industry.",
    address: "Hollywood Walk of Fame, Los Angeles, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/XAMQs6HFTreF7TxC7",
    rating: 4.1,
    image: HollywoodWalkOfFame,
    categories: [3, 7, 10],
  },
  {
    id: 54,
    cityId: 6,
    name: "Griffith Observatory",
    description:
      "A facility situated on the south-facing slope of Mount Hollywood, offering views of the Los Angeles Basin and astronomical exhibits.",
    address: "2800 E Observatory Rd, Los Angeles, CA 90027, USA",
    googleMapUrl: "https://maps.app.goo.gl/6KChcdZd8McY32aw9",
    rating: 4.7,
    image: GriffithObservatory,
    categories: [1, 10, 13],
  },
  {
    id: 55,
    cityId: 6,
    name: "Santa Monica Pier",
    description:
      "A landmark pier with an amusement park, restaurants, and panoramic views of the Pacific Ocean.",
    address: "200 Santa Monica Pier, Santa Monica, CA 90401, USA",
    googleMapUrl: "https://maps.app.goo.gl/THaYCSPHrFfgZ5xNA",
    rating: 4.6,
    image: SantaMonicaPier,
    categories: [3, 7, 9],
  },
  {
    id: 56,
    cityId: 6,
    name: "The Getty Center",
    description:
      "A campus of the Getty Museum featuring European paintings, drawings, sculptures, and decorative arts, as well as European and American photographs.",
    address: "1200 Getty Center Dr, Los Angeles, CA 90049, USA",
    googleMapUrl: "https://maps.app.goo.gl/8oprjhdhm7zRknLH8",
    rating: 4.8,
    image: GettyCenter,
    categories: [1, 12, 10],
  },
  {
    id: 57,
    cityId: 6,
    name: "Venice Beach Boardwalk",
    description:
      "A vibrant, mile-long pedestrian promenade featuring street performers, vendors, and eclectic shops along the Pacific Ocean.",
    address: "Venice Beach Boardwalk, Los Angeles, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/7J4nanc4tpHKMn7v9",
    rating: 4.5,
    image: VeniceBeach,
    categories: [9, 7, 6],
  },
  {
    id: 58,
    cityId: 6,
    name: "The Hollywood Sign",
    description:
      "An iconic landmark in the Hollywood Hills spelling out 'HOLLYWOOD,' originally erected in 1923.",
    address: "Los Angeles, CA 90068, USA",
    googleMapUrl: "https://maps.app.goo.gl/omEWF4UHmrciV2Tp6",
    rating: 4.6,
    image: HollywoodSign,
    categories: [3, 10, 13],
  },
  {
    id: 59,
    cityId: 6,
    name: "Los Angeles County Museum of Art (LACMA)",
    description:
      "The largest art museum in the western United States, featuring a collection spanning thousands of years and diverse cultures.",
    address: "5905 Wilshire Blvd, Los Angeles, CA 90036, USA",
    googleMapUrl: "https://maps.app.goo.gl/Bc5UmaFN6BGY6PeD7",
    rating: 4.6,
    image: LACMA,
    categories: [1, 12, 14],
  },
  {
    id: 60,
    cityId: 6,
    name: "The Grove",
    description:
      "A popular retail and entertainment complex featuring shops, restaurants, a movie theater, and a dancing fountain.",
    address: "189 The Grove Dr, Los Angeles, CA 90036, USA",
    googleMapUrl: "https://maps.app.goo.gl/n6rLh7U3armEKEfh8",
    rating: 4.6,
    image: TheGrove,
    categories: [6, 7, 11],
  },
  {
    id: 61,
    cityId: 6,
    name: "Runyon Canyon Park",
    description:
      "A 160-acre park in the heart of Hollywood, offering hiking trails and panoramic views of the city.",
    address: "2000 N Fuller Ave, Los Angeles, CA 90046, USA",
    googleMapUrl: "https://maps.app.goo.gl/875ftWcPbsTanQaX7",
    rating: 4.8,
    image: RunyonCanyon,
    categories: [2, 5, 10],
  },

  // Tokyo Attractions
  {
    id: 62,
    cityId: 7,
    name: "Tokyo Skytree",
    description:
      "A broadcasting and observation tower that is the tallest structure in Japan, offering panoramic views of Tokyo.",
    address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
    googleMapUrl: "https://maps.app.goo.gl/JhgN9NsM8Zkfxv8RA",
    rating: 4.4,
    image: TokyoSkytree,
    categories: [3, 7, 13],
  },
  {
    id: 63,
    cityId: 7,
    name: "Meiji Shrine",
    description:
      "A Shinto shrine dedicated to Emperor Meiji and Empress Shoken, surrounded by a forest in the middle of Tokyo.",
    address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
    googleMapUrl: "https://maps.app.goo.gl/6sTNm2nU6FtHocTCA",
    rating: 4.6,
    image: MeijiShrine,
    categories: [4, 8, 10],
  },
  {
    id: 64,
    cityId: 7,
    name: "Senso-ji Temple",
    description:
      "Tokyo's oldest temple, featuring a five-story pagoda and bustling shopping street (Nakamise).",
    address: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
    googleMapUrl: "https://maps.app.goo.gl/Af62RG6JDRJmPbAC6",
    rating: 4.5,
    image: SensojiTemple,
    categories: [4, 8, 14],
  },
  {
    id: 65,
    cityId: 7,
    name: "Shibuya Crossing",
    description:
      "One of the busiest pedestrian crossings in the world, where thousands of people cross simultaneously when the traffic lights change.",
    address:
      "Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 2 Chome−2−1 Shibuya Scramble Square",
    googleMapUrl: "https://maps.app.goo.gl/kkxoSMdzHXHy3tZc6",
    rating: 4.5,
    image: ShibuyaCrossing,
    categories: [3, 10, 7],
  },
  {
    id: 66,
    cityId: 7,
    name: "Tokyo Disneyland",
    description:
      "A theme park featuring attractions, dining, and entertainment based on Disney films and characters.",
    address: "1-1 Maihama, Urayasu, Chiba 279-0031, Japan",
    googleMapUrl: "https://maps.app.goo.gl/gTucqPjPRUj2QmT18",
    rating: 4.6,
    image: TokyoDisneyland,
    categories: [7, 10],
  },
  {
    id: 67,
    cityId: 7,
    name: "Shinjuku Gyoen National Garden",
    description:
      "A spacious public park featuring Japanese, French, and English gardens, especially popular during cherry blossom season.",
    address: "11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan",
    googleMapUrl: "https://maps.app.goo.gl/v9NtLSbAyuZAakPs8",
    rating: 4.6,
    image: ShinjukuGyoen,
    categories: [2, 5, 10],
  },
  {
    id: 68,
    cityId: 7,
    name: "Tokyo Imperial Palace",
    description:
      "The primary residence of the Emperor of Japan, surrounded by moats and stone walls in central Tokyo.",
    address: "1-1 Chiyoda, Chiyoda City, Tokyo 100-8111, Japan",
    googleMapUrl: "https://maps.app.goo.gl/KrYhnWvRUdapws1s6",
    rating: 4.4,
    image: ImperialPalace,
    categories: [3, 4, 10],
  },
  {
    id: 69,
    cityId: 7,
    name: "Ueno Park",
    description:
      "A spacious public park known for its museums, zoo, and cherry blossoms in spring.",
    address: "Uenokoen, Taito City, Tokyo 110-0007, Japan",
    googleMapUrl: "https://maps.app.goo.gl/QS2kMCzovy3Et1WH6",
    rating: 4.3,
    image: UenoPark,
    categories: [2, 5, 10],
  },
  {
    id: 70,
    cityId: 7,
    name: "Akihabara Electric Town",
    description:
      "A district known for its electronic shops, anime stores, and maid cafes, reflecting Japan's otaku culture.",
    address: "Akihabara, Taito City, Tokyo, Japan",
    googleMapUrl: "https://maps.app.goo.gl/pGtpVpd452LizEwY9",
    rating: 4.2,
    image: Akihabara,
    categories: [6, 7, 14],
  },
  {
    id: 71,
    cityId: 7,
    name: "Harajuku (Takeshita Street)",
    description:
      "A colorful street known for its youth fashion culture, trendy shops, and crepe stands.",
    address: "1 Chome Jingumae, Shibuya City, Tokyo 150-0001, Japan",
    googleMapUrl: "https://maps.app.goo.gl/VFwa3nqFpP5bTt3s5",
    rating: 4.0,
    image: Harajuku,
    categories: [6, 7, 14],
  },

  // Seoul Attractions
  {
    id: 72,
    cityId: 8,
    name: "Gyeongbokgung Palace",
    description:
      "The largest and most significant royal palace built during the Joseon Dynasty, featuring traditional architecture and changing of the guard ceremonies.",
    address: "161 Sajik-ro, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/3fTS2EQMkHFvevJE8",
    rating: 4.6,
    image: GyeongbokgungPalace,
    categories: [3, 4, 12],
  },
  {
    id: 73,
    cityId: 8,
    name: "Namsan Tower (N Seoul Tower)",
    description:
      "A communication and observation tower offering panoramic views of Seoul from its location on Namsan Mountain.",
    address: "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/3npT4tX5y4cFt22u5",
    rating: 4.5,
    image: NamsanTower,
    categories: [3, 13, 7],
  },
  {
    id: 74,
    cityId: 8,
    name: "Bukchon Hanok Village",
    description:
      "A traditional Korean village featuring hundreds of hanok (traditional houses) that date back to the Joseon Dynasty.",
    address: "37 Gyedong-gil, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/hjj3rHYVqtipapzG8",
    rating: 4.4,
    image: BukchonHanokVillage,
    categories: [4, 12, 14],
  },
  {
    id: 75,
    cityId: 8,
    name: "Myeongdong",
    description:
      "A major shopping area featuring luxury brands, department stores, and street food stalls.",
    address: "Myeongdong, Jung-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/SL1yNvN849BrmS2y8",
    rating: 5,
    image: Myeongdong,
    categories: [6, 11, 10],
  },
  {
    id: 76,
    cityId: 8,
    name: "Lotte World",
    description:
      "A major recreation complex featuring the world's largest indoor theme park, an outdoor amusement park, shopping malls, and more.",
    address: "240 Olympic-ro, Songpa-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/aTr3VKjtmkCyDCaU7",
    rating: 4.3,
    image: LotteWorld,
    categories: [7, 6],
  },
  {
    id: 77,
    cityId: 8,
    name: "Changdeokgung Palace",
    description:
      "A UNESCO World Heritage Site known for its beautiful garden called Huwon (Secret Garden), representing traditional Korean palace architecture.",
    address: "99 Yulgok-ro, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/ds6EAeHjgUCuryRX8",
    rating: 4.6,
    image: ChangdeokgungPalace,
    categories: [3, 4, 12],
  },
  {
    id: 78,
    cityId: 8,
    name: "Dongdaemun Design Plaza (DDP)",
    description:
      "A major urban development featuring a futuristic design by Zaha Hadid, hosting exhibitions, fashion shows, and cultural events.",
    address: "281 Eulji-ro, Jung-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/PAqpkrw8CF6MdCdy8",
    rating: 4.3,
    image: DongdaemunDesignPlaza,
    categories: [12, 6, 7],
  },
  {
    id: 79,
    cityId: 8,
    name: "Insadong",
    description:
      "A neighborhood known for its traditional crafts, teahouses, and galleries, representing Korean art and culture.",
    address: "Insadong-gil, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/J71rfCpD5RSGfjVX8",
    rating: 4.2,
    image: Insadong,
    categories: [6, 11, 14],
  },
  {
    id: 80,
    cityId: 8,
    name: "Yeouido Hangang Park",
    description:
      "Large, popular park on the river featuring scenic views, plus running paths & a swimming pool.",
    address: "330 Yeouidong-ro, Yeongdeungpo District, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/eSo5dqK5XqE5vjTR6",
    rating: 4.5,
    image: YeouidoHangangPark,
    categories: [2, 5, 10],
  },
  {
    id: 81,
    cityId: 8,
    name: "Starfield Library",
    description:
      "Futuristic library & cultural event space on 2 levels of a mall with floor-to-ceiling bookshelves.",
    address:
      "South Korea, Seoul, Gangnam District, Yeongdong-daero, 513 스타필드 코엑스몰 B1",
    googleMapUrl: "https://maps.app.goo.gl/dx6mBHn4EqcdW75v6",
    rating: 4.6,
    image: StarfieldLibrary,
    categories: [6, 7, 11],
  },
];

export { attractions, cities, categories };

export type { Category, Attraction, City };
