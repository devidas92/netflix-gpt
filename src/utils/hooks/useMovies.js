import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/slices/movieSlice";
import { API_OPTIONS, NOW_PLAYING_URL } from "../constants";

export const useMovies = () => {
  const dispatch = useDispatch();
  const fetchMovies = async () => {
    try {
      const response = await fetch(NOW_PLAYING_URL, API_OPTIONS);
      const data = await response.json();
      dispatch(addNowPlayingMovies(data?.results ?? []));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
};
