import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import movieReducer from "./slices/movieSlice";

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
});

export default appstore;
