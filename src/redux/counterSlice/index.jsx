import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increaseBy1: (state) => state + 1,
    decreaseBy1: (state) => state - 1,
  },
});

export const { increaseBy1, decreaseBy1 } = counterSlice.actions;
export default counterSlice.reducer;
