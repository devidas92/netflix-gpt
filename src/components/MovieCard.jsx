import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[120px] sm:min-w-[160px] md:min-w-[200px] h-auto overflow-hidden rounded-md shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer snap-start">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};

export default MovieCard;
