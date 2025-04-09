"use client";

import { MediaGrid } from "@/components/MediaGrid";
import { mockTVShows } from "@/lib/mockData";

export default function TVShows() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">TV Shows</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Discover popular and trending TV series
        </p>
      </section>
      
      <section>
        <MediaGrid items={mockTVShows} />
      </section>
    </main>
  );
}