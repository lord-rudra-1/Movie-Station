"use client";

import Image from 'next/image';
import Link from 'next/link';

interface MediaCardProps {
  id: string | number;
  title: string;
  posterPath: string;
  type: 'movie' | 'tv';
  releaseDate?: string;
  rating?: number;
}

export const MediaCard = ({ id, title, posterPath, type, releaseDate, rating }: MediaCardProps) => {
  const detailsUrl = type === 'movie' ? `/movies/${id}` : `/tv-shows/${id}`;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative h-64 w-full">
        {posterPath ? (
          <Image 
            src={posterPath} 
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 dark:bg-gray-700">
            <span className="text-gray-500 dark:text-gray-400">No image available</span>
          </div>
        )}
        {rating && (
          <div className="absolute top-2 right-2 bg-yellow-500 text-black font-bold rounded-full w-10 h-10 flex items-center justify-center">
            {rating.toFixed(1)}
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">{title}</h3>
        {releaseDate && (
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            {new Date(releaseDate).getFullYear()}
          </p>
        )}
        <div className="mt-4">
          <Link 
            href={detailsUrl}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
