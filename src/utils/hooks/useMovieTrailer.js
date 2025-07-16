import { useDispatch } from "react-redux";
import { addTrailer } from "../store/slices/movieSlice";
import { API_OPTIONS } from "../constants";
import { useEffect } from "react";

export const useMovieTrailer = (movie_id) => {
  const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await res.json();
      let trailer_video_details = data?.results?.find(
        (each) => each.type.toLowerCase() === "trailer"
      );
      const trailer = trailer_video_details
        ? trailer_video_details
        : data.results[0];

      dispatch(addTrailer(trailer));
    } catch (error) {}
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};
