"use client";

import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // You could redirect to a search results page or filter content
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-4 mb-3 md:mb-0">
          <Link href="/" className="text-white text-xl font-bold">Movie Station</Link>
          <div className="flex space-x-4">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link href="/movies" className="text-gray-300 hover:text-white transition-colors">Movies</Link>
            <Link href="/tv-shows" className="text-gray-300 hover:text-white transition-colors">TV Shows</Link>
          </div>
        </div>
        
        <form onSubmit={handleSearch} className="flex w-full md:w-auto">
          <input
            type="text"
            placeholder="Search movies, TV shows..."
            className="px-4 py-2 rounded-l-md focus:outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            type="submit" 
            className="bg-red-600 text-white px-4 py-2 rounded-r-md hover:bg-red-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  )
}
