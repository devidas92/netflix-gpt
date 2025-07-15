import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
const appstore = configureStore({
  reducer: { user: userReducer },
});

export default appstore;
