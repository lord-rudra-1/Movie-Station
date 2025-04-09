"use client";

import React from 'react';
import { MediaCard } from './MediaCard';

interface MediaItem {
  id: string | number;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv';
  releaseDate?: string;
  rating?: number;
}

interface MediaGridProps {
  items: MediaItem[];
  title?: string;
}

export const MediaGrid = ({ items, title }: MediaGridProps) => {
  if (!items || items.length === 0) {
    return (
      <div className="py-8 text-center">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">No items found</h2>
      </div>
    );
  }

  return (
    <div className="py-6">
      {title && (
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            id={item.id}
            title={item.title}
            posterPath={item.posterPath}
            type={item.type}
            releaseDate={item.releaseDate}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};
