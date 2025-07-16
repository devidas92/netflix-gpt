import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";
import gptSearchReducer from "./slices/gptSearchSlice";
import configReducer from "./slices/configSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gptSearch: gptSearchReducer,
    config: configReducer,
  },
});

export default appstore;
