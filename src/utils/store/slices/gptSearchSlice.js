import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    gptSearchActive: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.gptSearchActive = !state.gptSearchActive;
    },
  },
});
export const { toggleGptSearch } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
