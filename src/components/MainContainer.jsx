import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((state) => state.movies.nowPlaying);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full aspect-video">
      {/* Video in background */}
      <VideoBackground movieId={mainMovie.id} />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-10"></div>

      {/* Foreground content */}
      <VideoTitle
        title={mainMovie.title}
        overview={mainMovie.overview}
        releaseDate={mainMovie.release_date}
        rating={mainMovie.vote_average}
        genres={mainMovie.genres?.map((g) => g.name)}
      />
    </div>
  );
};

export default MainContainer;
