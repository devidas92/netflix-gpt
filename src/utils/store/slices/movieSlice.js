import { createSlice } from "@reduxjs/toolkit";

// movieSlice.js
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: [],
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlaying = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies,addTrailer } = movieSlice.actions;
export default movieSlice.reducer;
