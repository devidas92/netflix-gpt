import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="-mt-50 relative z-30 pt-6 md:pt-16 pb-16">
      <div className="space-y-8 px-4 md:px-8">
        <MovieList title="Now Playing" movies={movies.nowPlaying} />
        <MovieList title="Trending Now" movies={movies.nowPlaying} />
        <MovieList title="Horror Movies" movies={movies.nowPlaying} />
        <MovieList title="Hollywood Movies" movies={movies.nowPlaying} />
        <MovieList title="Top Picks for You" movies={movies.nowPlaying} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
