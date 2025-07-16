import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <div className="text-white">
      <h2 className="text-lg md:text-2xl font-semibold mb-2 px-2">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 px-2 no-scrollbar scroll-smooth">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie?.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
