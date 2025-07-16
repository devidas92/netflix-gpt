import React, { useState } from "react";
import { IoMdPlay } from "react-icons/io";
import { VscInfo } from "react-icons/vsc";

const VideoTitle = ({ title, overview, releaseDate, rating, genres }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="absolute top-1/2 left-4 md:left-16 transform -translate-y-1/2 z-20 text-white w-full max-w-3xl">
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent -z-10 rounded-lg" />

      <div className="space-y-5 p-6 backdrop-blur-md bg-black/40 rounded-lg shadow-[0_0_60px_rgba(0,0,0,0.6)]">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-snug drop-shadow-md">
          {title}
        </h1>

        <p className="text-base md:text-lg text-gray-200 leading-relaxed drop-shadow-md">
          {showMore ? overview : `${overview.slice(0, 150)}...`}
        </p>

        <div className="flex flex-wrap gap-4 mt-2">
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-md text-lg font-semibold hover:bg-opacity-90 transition-shadow shadow-md hover:scale-105">
            <IoMdPlay size={22} />
            Play
          </button>

          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="flex items-center gap-2 bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md text-lg font-semibold hover:bg-gray-600 transition hover:scale-105 shadow-md"
          >
            <VscInfo size={20} />
            <span>{showMore ? "Less Info" : "More Info"}</span>
          </button>
        </div>

        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showMore ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="text-sm text-gray-300 space-y-2">
            <p>
              <strong>Release:</strong> {releaseDate}
            </p>
            <p>
              <strong>Rating:</strong> {rating}/10
            </p>
            <div className="flex flex-wrap gap-2">
              <strong>Genres:</strong>
              {genres?.length > 0 ? (
                genres.map((g) => (
                  <span
                    key={g}
                    className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                  >
                    {g}
                  </span>
                ))
              ) : (
                <span>N/A</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
