// Mock data for movies
export const mockMovies = [
  {
    id: 1,
    title: "Inception",
    posterPath: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    type: "movie",
    releaseDate: "2010-07-16",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    posterPath: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    type: "movie",
    releaseDate: "1994-09-23",
    rating: 9.3
  },
  {
    id: 3,
    title: "The Dark Knight",
    posterPath: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    type: "movie",
    releaseDate: "2008-07-18",
    rating: 9.0
  },
  {
    id: 4,
    title: "Pulp Fiction",
    posterPath: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    type: "movie",
    releaseDate: "1994-10-14",
    rating: 8.9
  },
  {
    id: 5,
    title: "The Godfather",
    posterPath: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    type: "movie",
    releaseDate: "1972-03-24",
    rating: 9.2
  },
  {
    id: 6,
    title: "Interstellar",
    posterPath: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    type: "movie",
    releaseDate: "2014-11-07",
    rating: 8.6
  }
];

// Mock data for TV shows
export const mockTVShows = [
  {
    id: 101,
    title: "Breaking Bad",
    posterPath: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    type: "tv",
    releaseDate: "2008-01-20",
    rating: 9.5
  },
  {
    id: 102,
    title: "Game of Thrones",
    posterPath: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
    type: "tv",
    releaseDate: "2011-04-17",
    rating: 9.3
  },
  {
    id: 103,
    title: "Stranger Things",
    posterPath: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    type: "tv",
    releaseDate: "2016-07-15",
    rating: 8.7
  },
  {
    id: 104,
    title: "The Wire",
    posterPath: "https://image.tmdb.org/t/p/w500/eCrIUmUvjAzXvV8Rx0RJZ4TiRqM.jpg",
    type: "tv",
    releaseDate: "2002-06-02",
    rating: 9.3
  },
  {
    id: 105,
    title: "The Mandalorian",
    posterPath: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
    type: "tv",
    releaseDate: "2019-11-12",
    rating: 8.8
  },
  {
    id: 106,
    title: "The Queen's Gambit",
    posterPath: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    type: "tv",
    releaseDate: "2020-10-23",
    rating: 8.6
  }
];

// Featured content for home page
export const featuredContent = [
  ...mockMovies.slice(0, 3),
  ...mockTVShows.slice(0, 3)
];
