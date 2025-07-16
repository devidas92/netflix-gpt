import { useSelector } from "react-redux";
import { useMovieTrailer } from "../utils/hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideoObj = useSelector((state) => state.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="absolute top-0 left-0 w-full h-full  overflow-hidden">
      <iframe
        className="w-full h-full object-cover pointer-events-none"
        src={`https://www.youtube.com/embed/${trailerVideoObj?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerVideoObj?.key}`}
        title="Movie Trailer"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
