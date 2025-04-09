"use client";

import { MediaGrid } from "@/components/MediaGrid";
import { mockMovies } from "@/lib/mockData";

export default function Movies() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Movies</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Browse our collection of popular and trending movies
        </p>
      </section>
      
      <section>
        <MediaGrid items={mockMovies} />
      </section>
    </main>
  );
}