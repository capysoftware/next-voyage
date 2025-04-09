import { db } from "@/db";
import { cities } from "@/db/schema";

(async function seed() {
  await db.insert(cities).values([
    {
      name: "Vancouver",
      country: "Canada",
      description: "A scenic west coast seaport city in British Columbia.",
      image: "https://images.unsplash.com/photo-1584839484901-ec1f5f403ed2", // Vancouver skyline
    },
    {
      name: "Toronto",
      country: "Canada",
      description: "The largest city in Canada, known for the CN Tower.",
      image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507", // CN Tower
    },
    {
      name: "San Francisco",
      country: "USA",
      description: "Famous for the Golden Gate Bridge and its tech scene.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29", // Golden Gate Bridge
    },
    {
      name: "Tokyo",
      country: "Japan",
      description:
        "A bustling metropolis mixing modern and traditional culture.",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b", // Tokyo at night
    },
    {
      name: "Seoul",
      country: "South Korea",
      description:
        "The capital of South Korea, known for its pop culture and technology.",
      image: "https://images.unsplash.com/photo-1581592485309-308a3e47f6f2", // Seoul cityscape
    },
  ]);
  console.log("Inserted cities");
})();
