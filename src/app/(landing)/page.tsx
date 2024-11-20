"use client";

import { CategoryListing } from "@/components/features/CategoryListing";
import { categories } from "@/data";

export default function Home() {
  return (
    <div>
      {/* Jumbotron */}
      <div className="bg-gray-100 py-10 text-center mb-8">
        <h1 className="text-4xl font-bold">Discover Amazing Events</h1>

        <p className="text-lg mt-2 text-gray-600">
          Explore the best Opera, Concerts, Theater Plays, and Exhibitions near
          you!
        </p>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 flex flex-col gap-y-4">
        {categories.map((category) => (
          <CategoryListing key={category} category={category} />
        ))}
      </div>
    </div>
  );
}
