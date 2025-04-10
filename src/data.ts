interface City {
  name: string;
  country: string;
  description: string;
  image: string;
}

const cities: City[] = [
  {
    name: "Vancouver",
    country: "Canada",
    description:
      "A bustling west coast seaport in British Columbia, Vancouver is among Canada's densest, most ethnically diverse cities, surrounded by mountains and natural beauty.",
    image: "https://images.unsplash.com/photo-1560813962-ff3d8fcf59ba",
  },
  {
    name: "Toronto",
    country: "Canada",
    description:
      "Canada's largest city and a multicultural hub for arts, culture, finance, and technology.",
    image: "https://images.unsplash.com/photo-1517090504586-fde19ea6066f",
  },
  {
    name: "New York City",
    country: "United States",
    description:
      "New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean, and is known for its iconic skyline, arts scene, and cultural diversity.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9",
  },
  {
    name: "San Francisco",
    country: "United States",
    description:
      "San Francisco, a hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay, is known for its iconic Golden Gate Bridge, cable cars, and colorful Victorian houses.",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  },
  {
    name: "Seattle",
    country: "United States",
    description:
      "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and home to thousands of acres of parkland.",
    image: "https://images.unsplash.com/photo-1502175353174-a7a70e73b362",
  },
  {
    name: "Los Angeles",
    country: "United States",
    description:
      "Los Angeles is a sprawling Southern California city and the center of the nation's film and television industry, with studios such as Paramount Pictures, Universal and Warner Brothers.",
    image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0",
  },
  {
    name: "Tokyo",
    country: "Japan",
    description:
      "Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
  },
  {
    name: "Seoul",
    country: "South Korea",
    description:
      "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets.",
    image: "https://images.unsplash.com/photo-1682648353194-85d274114ef0",
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
  { id: 10, name: "budget_friendly", color: "#FDE1D3" },
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
  image: string;
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
    image: "https://images.unsplash.com/uploads/1413142095961484763cf/d141726c",
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
    image: "https://images.unsplash.com/photo-1485289284810-303162a4add7",
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
    image: "https://images.unsplash.com/photo-1692152006306-3e036c4b9414",
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
    image:
      "https://media.cntraveler.com/photos/5c23aba24cebb85796fe4e43/16:9/w_2560%2Cc_limit/Vancouver-Aquarium_New-Entrance-Exterior---Photo-Credit-Vancouver-Aquarium.jpg",
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
    image:
      "https://lh3.googleusercontent.com/proxy/ruyVV1lPKalBFvOidz34LSS7wGrF9qEr_bc1lOgO1glz8WyLVJxU2BQGDvJVKE8MBWSQ2FVMtpD2lMRgvWlNN9u3ade6zOsiigNUiurAJmXFNhuTEgzVb4gEQewH3tB6MwUEjJqaszvGTNdDVK0CCB8EXqrJnA=s1360-w1360-h1020",
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
    image: "https://images.unsplash.com/photo-1610976273321-bd3466ae0b23",
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
    image:
      "https://lh3.googleusercontent.com/proxy/St1b7eyMqkDja2sCo1b6iSWcKNcTAYOySO4HpF3strV6bnCJZA0Fjzf76UQlY3twNkknj26lqYz6DYC-GHL-buel13BRFR5Mg6NpwvgAEvUeIDt1WuDgdzHKc1XK4ZiSI1-ort9Rckc1WCuuCLl7lDeohkfGm9c=s1360-w1360-h1020",
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
    image:
      "https://lh3.googleusercontent.com/p/AF1QipP-GHe1BzyBFYScUWHgzSeT9R819MF4Dw6mPGI2=s1360-w1360-h1020",
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
    image: "https://images.unsplash.com/photo-1544161513-0179fe746fd5",
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
    image: "https://images.unsplash.com/photo-1712285155308-0d49a3c994f0",
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
    image: "https://images.unsplash.com/photo-1521505088417-bfc5a507f901",
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
    image: "https://images.unsplash.com/photo-1696246234599-09aa237e1938",
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
    image:
      "https://lh3.googleusercontent.com/p/AF1QipO3Q_mrfNnz2xqxuFoRHQsouK-yWX15CWe_LRat=s1360-w1360-h1020",
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
    image: "https://images.unsplash.com/photo-1478515940002-d9d96d21e720",
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
    image: "https://images.unsplash.com/photo-1579198096038-58bb3a8fc556",
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
    image: "https://images.unsplash.com/photo-1691494242756-0e6ccaf4b762",
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
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AB5caB_uXDLp3kSZIN2hoSMvWHtPJcZ2Ia4w1L7LyNAeDB0hEjtYQ8suHCv3lbe2_ZpVAaAyHGRRs3BZ29_-46qd4xU_Ogrus_0ZLFsu3slCCKbZ21KSrLDLjAoX3ekx81i7LTskcqhSXw=s1360-w1360-h1020",
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
    image: "https://images.unsplash.com/photo-1557669973-a927e548e948",
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
    image: "https://images.unsplash.com/photo-1625616257864-99f951b0b64b",
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
    image: "https://images.unsplash.com/photo-1739761445791-72bb62789110",
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
    image: "https://images.unsplash.com/photo-1555109307-f7d9da25c244",
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
    image: "https://images.unsplash.com/photo-1526638684360-95cdcee762ce",
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
    image: "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90",
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
    image: "https://images.unsplash.com/photo-1576254232140-70c274d668c4",
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
    image: "https://images.unsplash.com/photo-1582760548598-0bccdf815aa2",
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
    image: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a",
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
    image: "https://images.unsplash.com/photo-1544500060-cd2188b3d440",
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
    image: "https://images.unsplash.com/photo-1624553348093-ed95c718f37b",
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
    image: "https://images.unsplash.com/photo-1534739302117-e9ff126dec91",
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
    image: "https://images.unsplash.com/photo-1583842761792-214790fc1ae0",
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
    image: "https://images.unsplash.com/photo-1610312278520-bcc893a3ff1d",
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
    image: "https://images.unsplash.com/photo-1586860870825-874e93ea0f63",
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
    image: "https://images.unsplash.com/photo-1679560872179-65ad87a01c8c",
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
    image: "https://images.unsplash.com/photo-1655564476277-d6c02a4dd924",
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
    image: "https://images.unsplash.com/photo-1602730307445-03a827d3f975",
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
    image:
      "https://lh3.googleusercontent.com/gps-cs-s/AB5caB-7TX9Y257Bqaz4qeAJfuOyP3T04BxOXg0nWFpch6IovcdKxQR8iM5uk_u_jwK52i-EO0XbkVsJ2UQRpXFckzDgUZc6yfDug07IfiQQcyM7PHuHyleYnEOW76Y4dJ57HjNofdVZ=s1360-w1360-h1020",
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
    image: "https://images.unsplash.com/photo-1711325565501-0d71ceecafb0",
    categories: [3, 4, 12],
  },
  {
    id: 38,
    cityId: 4,
    name: "Twin Peaks",
    description:
      "Two adjacent peaks offering panoramic views of the San Francisco Bay Area.",
    address: "501 Twin Peaks Blvd, San Francisco, CA 94114, USA",
    googleMapUrl: "https://maps.app.goo.gl/q9F3XdWkdZyPxUus5",
    rating: 4,
    image: "https://images.unsplash.com/photo-1521464302861-ce943915d1c3",
    categories: [5, 10, 13],
  },
  {
    id: 39,
    cityId: 4,
    name: "Cable Cars",
    description:
      "The world's last manually operated cable car system, a San Francisco icon since 1873.",
    address: "Powell-Hyde Cable Car, San Francisco, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/aGVUZbXPkSLESHmi8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1570937943292-a374fd42bec5",
    categories: [3, 7, 10],
  },
  {
    id: 40,
    cityId: 4,
    name: "Painted Ladies",
    description:
      "A row of colorful Victorian houses facing Alamo Square Park, famously featured in movies and TV shows.",
    address: "Steiner St & Hayes St, San Francisco, CA 94117, USA",
    googleMapUrl: "https://maps.app.goo.gl/Jdu5pHwEv34CiT4M8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1562157069-c63fde79040d",
    categories: [3, 4, 12],
  },

  // Seattle Attractions
  {
    id: 41,
    cityId: 5,
    name: "Space Needle",
    description:
      "An observation tower built for the 1962 World's Fair, offering 360-degree views of Seattle and its surroundings.",
    address: "400 Broad St, Seattle, WA 98109, USA",
    googleMapUrl: "https://maps.app.goo.gl/YX5aJfuSPQAx6rEZA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1542223616-9de9adb5e3e8",
    categories: [3, 7, 13],
  },
  {
    id: 42,
    cityId: 5,
    name: "Pike Place Market",
    description:
      "A historic public market overlooking the Elliott Bay waterfront, known for its fresh produce, crafts, and the original Starbucks.",
    address: "85 Pike St, Seattle, WA 98101, USA",
    googleMapUrl: "https://maps.app.goo.gl/3JvVGMTLPBL9MXvZ7",
    rating: 5,
    image: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7",
    categories: [6, 11, 10],
  },
  {
    id: 43,
    cityId: 5,
    name: "Chihuly Garden and Glass",
    description:
      "An exhibit showcasing the studio glass of Dale Chihuly, featuring a garden, glasshouse, and interior galleries.",
    address: "305 Harrison St, Seattle, WA 98109, USA",
    googleMapUrl: "https://maps.app.goo.gl/8fUyg2vfHNadFvZn8",
    rating: 5,
    image: "https://images.unsplash.com/photo-1579022090314-03660ebed710",
    categories: [1, 12, 14],
  },
  {
    id: 44,
    cityId: 5,
    name: "Museum of Pop Culture (MoPOP)",
    description:
      "A nonprofit museum dedicated to contemporary popular culture, music, science fiction, and more.",
    address: "325 5th Ave N, Seattle, WA 98109, USA",
    googleMapUrl: "https://maps.app.goo.gl/BjP88mjGkd8gVwNr7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1558888401-3cc1de77652d",
    categories: [1, 7, 14],
  },
  {
    id: 45,
    cityId: 5,
    name: "Olympic Sculpture Park",
    description:
      "A nine-acre public park featuring outdoor sculptures and a beach along the waterfront.",
    address: "2901 Western Ave, Seattle, WA 98121, USA",
    googleMapUrl: "https://maps.app.goo.gl/VWmCacCRJavvhhD49",
    rating: 4,
    image: "https://images.unsplash.com/photo-1559077182-28cc77a88245",
    categories: [2, 12, 10],
  },
  {
    id: 46,
    cityId: 5,
    name: "Seattle Aquarium",
    description:
      "A public aquarium located on Pier 59 on the Elliott Bay waterfront, featuring marine exhibits.",
    address: "1483 Alaskan Way, Seattle, WA 98101, USA",
    googleMapUrl: "https://maps.app.goo.gl/uuodCy6Qgu4WiEvGA",
    rating: 4,
    image: "https://images.unsplash.com/photo-1576698487061-89e722f7726d",
    categories: [7, 10, 5],
  },
  {
    id: 47,
    cityId: 5,
    name: "Kerry Park",
    description:
      "A small park offering one of the most photographed views of Seattle's skyline, Mount Rainier, and Elliott Bay.",
    address: "211 W Highland Dr, Seattle, WA 98119, USA",
    googleMapUrl: "https://maps.app.goo.gl/2CZkb5NxnE5WvBf49",
    rating: 4,
    image: "https://images.unsplash.com/photo-1558717697-193dae8b5a23",
    categories: [2, 10, 13],
  },
  {
    id: 48,
    cityId: 5,
    name: "Woodland Park Zoo",
    description:
      "A zoological garden featuring wildlife from around the world and award-winning naturalistic exhibits.",
    address: "5500 Phinney Ave N, Seattle, WA 98103, USA",
    googleMapUrl: "https://maps.app.goo.gl/MxpftvvpGCF4y2dL8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1564928275797-0940a0a3e411",
    categories: [5, 7, 10],
  },
  {
    id: 49,
    cityId: 5,
    name: "Museum of Flight",
    description:
      "One of the largest air and space museums in the world, with over 175 aircraft and spacecraft on display.",
    address: "9404 E Marginal Way S, Seattle, WA 98108, USA",
    googleMapUrl: "https://maps.app.goo.gl/gKyxZKgQvwpqHsYR9",
    rating: 5,
    image: "https://images.unsplash.com/photo-1636558346056-7a27d379b2ea",
    categories: [1, 4, 10],
  },
  {
    id: 50,
    cityId: 5,
    name: "Gas Works Park",
    description:
      "A public park on the site of the former Seattle Gas Light Company gasification plant, offering views of Lake Union and the Seattle skyline.",
    address: "2101 N Northlake Way, Seattle, WA 98103, USA",
    googleMapUrl: "https://maps.app.goo.gl/Tp8jS1GcwCKhgj3p9",
    rating: 4,
    image: "https://images.unsplash.com/photo-1557085125-fa189e102833",
    categories: [2, 4, 13],
  },

  // Los Angeles Attractions
  {
    id: 51,
    cityId: 6,
    name: "Universal Studios Hollywood",
    description:
      "A film studio and theme park offering behind-the-scenes tours of movie sets and thrilling rides based on popular films.",
    address: "100 Universal City Plaza, Universal City, CA 91608, USA",
    googleMapUrl: "https://maps.app.goo.gl/fP8sCUGCUSJmMJST7",
    rating: 5,
    image: "https://images.unsplash.com/photo-1609924211018-5526c55bad5b",
    categories: [7, 3],
  },
  {
    id: 52,
    cityId: 6,
    name: "Hollywood Walk of Fame",
    description:
      "A historic landmark featuring more than 2,600 stars embedded in the sidewalks along Hollywood Boulevard, honoring achievements in the entertainment industry.",
    address: "Hollywood Walk of Fame, Los Angeles, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/3KpgH2fCvFMtGkZj7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1599320684653-84ae3d5c73b3",
    categories: [3, 7, 10],
  },
  {
    id: 53,
    cityId: 6,
    name: "Griffith Observatory",
    description:
      "A facility situated on the south-facing slope of Mount Hollywood, offering views of the Los Angeles Basin and astronomical exhibits.",
    address: "2800 E Observatory Rd, Los Angeles, CA 90027, USA",
    googleMapUrl: "https://maps.app.goo.gl/qLGFX9rRbPYBVvAX8",
    rating: 5,
    image: "https://images.unsplash.com/photo-1566159199779-20748d701da7",
    categories: [1, 10, 13],
  },
  {
    id: 54,
    cityId: 6,
    name: "Santa Monica Pier",
    description:
      "A landmark pier with an amusement park, restaurants, and panoramic views of the Pacific Ocean.",
    address: "200 Santa Monica Pier, Santa Monica, CA 90401, USA",
    googleMapUrl: "https://maps.app.goo.gl/xbDZwwk9KNQGY8Ja7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1618918160222-b1d7e96be27c",
    categories: [3, 7, 9],
  },
  {
    id: 55,
    cityId: 6,
    name: "The Getty Center",
    description:
      "A campus of the Getty Museum featuring European paintings, drawings, sculptures, and decorative arts, as well as European and American photographs.",
    address: "1200 Getty Center Dr, Los Angeles, CA 90049, USA",
    googleMapUrl: "https://maps.app.goo.gl/GsEXMhYKoRK7RRqn9",
    rating: 5,
    image: "https://images.unsplash.com/photo-1604193329766-0ff3af871e9e",
    categories: [1, 12, 10],
  },
  {
    id: 56,
    cityId: 6,
    name: "Venice Beach Boardwalk",
    description:
      "A vibrant, mile-long pedestrian promenade featuring street performers, vendors, and eclectic shops along the Pacific Ocean.",
    address: "Venice Beach Boardwalk, Los Angeles, CA, USA",
    googleMapUrl: "https://maps.app.goo.gl/e9tgb8uh72iBU4qL7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da",
    categories: [9, 7, 6],
  },
  {
    id: 57,
    cityId: 6,
    name: "The Hollywood Sign",
    description:
      "An iconic landmark in the Hollywood Hills spelling out 'HOLLYWOOD,' originally erected in 1923.",
    address: "Los Angeles, CA 90068, USA",
    googleMapUrl: "https://maps.app.goo.gl/gXFi8MZpV1TGhzYC6",
    rating: 4,
    image: "https://images.unsplash.com/photo-1595830770487-46328ba8c2d5",
    categories: [3, 10, 13],
  },
  {
    id: 58,
    cityId: 6,
    name: "Los Angeles County Museum of Art (LACMA)",
    description:
      "The largest art museum in the western United States, featuring a collection spanning thousands of years and diverse cultures.",
    address: "5905 Wilshire Blvd, Los Angeles, CA 90036, USA",
    googleMapUrl: "https://maps.app.goo.gl/LEvwJEwZfdpqWAgZ7",
    rating: 5,
    image: "https://images.unsplash.com/photo-1575383095193-07792c4a8885",
    categories: [1, 12, 14],
  },
  {
    id: 59,
    cityId: 6,
    name: "The Grove",
    description:
      "A popular retail and entertainment complex featuring shops, restaurants, a movie theater, and a dancing fountain.",
    address: "189 The Grove Dr, Los Angeles, CA 90036, USA",
    googleMapUrl: "https://maps.app.goo.gl/HCdU8R5Z6G4MKxLv6",
    rating: 4,
    image: "https://images.unsplash.com/photo-1505845296167-d68ee4536cf2",
    categories: [6, 7, 11],
  },
  {
    id: 60,
    cityId: 6,
    name: "Runyon Canyon Park",
    description:
      "A 160-acre park in the heart of Hollywood, offering hiking trails and panoramic views of the city.",
    address: "2000 N Fuller Ave, Los Angeles, CA 90046, USA",
    googleMapUrl: "https://maps.app.goo.gl/pNaANn1XnUMoQ6jL9",
    rating: 4,
    image: "https://images.unsplash.com/photo-1593286266530-9c7d453590a2",
    categories: [2, 5, 10],
  },

  // Tokyo Attractions
  {
    id: 61,
    cityId: 7,
    name: "Tokyo Skytree",
    description:
      "A broadcasting and observation tower that is the tallest structure in Japan, offering panoramic views of Tokyo.",
    address: "1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-0045, Japan",
    googleMapUrl: "https://maps.app.goo.gl/T9dVnPMWLn32P8mK6",
    rating: 5,
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
    categories: [3, 7, 13],
  },
  {
    id: 62,
    cityId: 7,
    name: "Meiji Shrine",
    description:
      "A Shinto shrine dedicated to Emperor Meiji and Empress Shoken, surrounded by a forest in the middle of Tokyo.",
    address: "1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan",
    googleMapUrl: "https://maps.app.goo.gl/zLFvpZZMsrSEtYrj7",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583416770333-c2048694dfe1",
    categories: [4, 8, 10],
  },
  {
    id: 63,
    cityId: 7,
    name: "Senso-ji Temple",
    description:
      "Tokyo's oldest temple, featuring a five-story pagoda and bustling shopping street (Nakamise).",
    address: "2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
    googleMapUrl: "https://maps.app.goo.gl/ZXVnA4N9gWAJNDX99",
    rating: 5,
    image: "https://images.unsplash.com/photo-1583400223105-aeca3c6dd3a9",
    categories: [4, 8, 14],
  },
  {
    id: 64,
    cityId: 7,
    name: "Shibuya Crossing",
    description:
      "One of the busiest pedestrian crossings in the world, where thousands of people cross simultaneously when the traffic lights change.",
    address:
      "Japan, 〒150-0043 Tokyo, Shibuya City, Dogenzaka, 2 Chome−2−1 Shibuya Scramble Square",
    googleMapUrl: "https://maps.app.goo.gl/s8wJa9RPskd6Jhj1A",
    rating: 4,
    image: "https://images.unsplash.com/photo-1542051841669-53ae482608c1",
    categories: [3, 10, 7],
  },
  {
    id: 65,
    cityId: 7,
    name: "Tokyo Disneyland",
    description:
      "A theme park featuring attractions, dining, and entertainment based on Disney films and characters.",
    address: "1-1 Maihama, Urayasu, Chiba 279-0031, Japan",
    googleMapUrl: "https://maps.app.goo.gl/Xm5MkHzzkEHfQZWw6",
    rating: 5,
    image: "https://images.unsplash.com/photo-1547782371-cd401ba30d87",
    categories: [7, 10],
  },
  {
    id: 66,
    cityId: 7,
    name: "Shinjuku Gyoen National Garden",
    description:
      "A spacious public park featuring Japanese, French, and English gardens, especially popular during cherry blossom season.",
    address: "11 Naitomachi, Shinjuku City, Tokyo 160-0014, Japan",
    googleMapUrl: "https://maps.app.goo.gl/m4EvqxKP5wHQDWzF9",
    rating: 4,
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    categories: [2, 5, 10],
  },
  {
    id: 67,
    cityId: 7,
    name: "Tokyo Imperial Palace",
    description:
      "The primary residence of the Emperor of Japan, surrounded by moats and stone walls in central Tokyo.",
    address: "1-1 Chiyoda, Chiyoda City, Tokyo 100-8111, Japan",
    googleMapUrl: "https://maps.app.goo.gl/EZ2Zvg4vN5M3XcfY8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1",
    categories: [3, 4, 10],
  },
  {
    id: 68,
    cityId: 7,
    name: "Ueno Park",
    description:
      "A spacious public park known for its museums, zoo, and cherry blossoms in spring.",
    address: "Uenokoen, Taito City, Tokyo 110-0007, Japan",
    googleMapUrl: "https://maps.app.goo.gl/dfPLKVJ6Y3jmwq1o7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
    categories: [2, 5, 10],
  },
  {
    id: 69,
    cityId: 7,
    name: "Akihabara",
    description:
      "A district known for its electronic shops, anime stores, and maid cafes, reflecting Japan's otaku culture.",
    address: "Akihabara, Taito City, Tokyo, Japan",
    googleMapUrl: "https://maps.app.goo.gl/aSn61jAzVMV8s9uw8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1581534886143-21af48d5ce16",
    categories: [6, 7, 14],
  },
  {
    id: 70,
    cityId: 7,
    name: "Harajuku (Takeshita Street)",
    description:
      "A colorful street known for its youth fashion culture, trendy shops, and crepe stands.",
    address: "1 Chome Jingumae, Shibuya City, Tokyo 150-0001, Japan",
    googleMapUrl: "https://maps.app.goo.gl/2v2CvGw8Z8WwZdYb7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1597998318626-3cf45ec66bbf",
    categories: [6, 7, 14],
  },

  // Seoul Attractions
  {
    id: 71,
    cityId: 8,
    name: "Gyeongbokgung Palace",
    description:
      "The largest and most significant royal palace built during the Joseon Dynasty, featuring traditional architecture and changing of the guard ceremonies.",
    address: "161 Sajik-ro, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/xGv3XQJrqpSWZC2V7",
    rating: 5,
    image: "https://images.unsplash.com/photo-1548128791-4c5f2a0df0ef",
    categories: [3, 4, 12],
  },
  {
    id: 72,
    cityId: 8,
    name: "Namsan Tower (N Seoul Tower)",
    description:
      "A communication and observation tower offering panoramic views of Seoul from its location on Namsan Mountain.",
    address: "105 Namsangongwon-gil, Yongsan-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/jNKS34TupWUF6QvV8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1617440168937-c6497a7b8f12",
    categories: [3, 13, 7],
  },
  {
    id: 73,
    cityId: 8,
    name: "Bukchon Hanok Village",
    description:
      "A traditional Korean village featuring hundreds of hanok (traditional houses) that date back to the Joseon Dynasty.",
    address: "37 Gyedong-gil, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/1P2TQJtPg1HzrRLg6",
    rating: 4,
    image: "https://images.unsplash.com/photo-1579169825753-44f9d4f31117",
    categories: [4, 12, 14],
  },
  {
    id: 74,
    cityId: 8,
    name: "Myeongdong",
    description:
      "A major shopping area featuring luxury brands, department stores, and street food stalls.",
    address: "Myeongdong, Jung-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/4Nv31f1yoHEGW1gq5",
    rating: 4,
    image: "https://images.unsplash.com/photo-1601621915196-2621bfb0cd6e",
    categories: [6, 11, 10],
  },
  {
    id: 75,
    cityId: 8,
    name: "Lotte World",
    description:
      "A major recreation complex featuring the world's largest indoor theme park, an outdoor amusement park, shopping malls, and more.",
    address: "240 Olympic-ro, Songpa-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/Ro7NFNK3QGfYNAgT9",
    rating: 4,
    image: "https://images.unsplash.com/photo-1592480963739-7b784a508cea",
    categories: [7, 6],
  },
  {
    id: 76,
    cityId: 8,
    name: "Changdeokgung Palace",
    description:
      "A UNESCO World Heritage Site known for its beautiful garden called Huwon (Secret Garden), representing traditional Korean palace architecture.",
    address: "99 Yulgok-ro, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/q8JaS5ZRBgf97bN79",
    rating: 5,
    image: "https://images.unsplash.com/photo-1604718767854-eac330cab657",
    categories: [3, 4, 12],
  },
  {
    id: 77,
    cityId: 8,
    name: "Dongdaemun Design Plaza (DDP)",
    description:
      "A major urban development featuring a futuristic design by Zaha Hadid, hosting exhibitions, fashion shows, and cultural events.",
    address: "281 Eulji-ro, Jung-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/TMUPvyJc1qVyYQse9",
    rating: 4,
    image: "https://images.unsplash.com/photo-1599828584205-ba7e68179d78",
    categories: [12, 6, 7],
  },
  {
    id: 78,
    cityId: 8,
    name: "Insadong",
    description:
      "A neighborhood known for its traditional crafts, teahouses, and galleries, representing Korean art and culture.",
    address: "Insadong-gil, Jongno-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/LCjEAh5Wf4SzGh4g8",
    rating: 4,
    image: "https://images.unsplash.com/photo-1497548291890-7d8f6ffec900",
    categories: [6, 11, 14],
  },
  {
    id: 79,
    cityId: 8,
    name: "Han River Park",
    description:
      "A series of parks along the Han River offering recreational activities, walking paths, and views of the city.",
    address: "Yeouido Han River Park, Yeongdeungpo-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/vEVPjNnLHDxpA3nU9",
    rating: 4,
    image: "https://images.unsplash.com/photo-1597074866923-dc0589150358",
    categories: [2, 5, 10],
  },
  {
    id: 80,
    cityId: 8,
    name: "Gangnam District",
    description:
      "A trendy area known for its upscale shopping, dining, and entertainment venues, made famous by the Gangnam Style song.",
    address: "Gangnam-gu, Seoul, South Korea",
    googleMapUrl: "https://maps.app.goo.gl/TFwwQZpJZBXzvqVC7",
    rating: 4,
    image: "https://images.unsplash.com/photo-1583069844784-38285f9b57a4",
    categories: [6, 7, 11],
  },
];

export { attractions, cities, categories };

export type { Category, Attraction, City };
