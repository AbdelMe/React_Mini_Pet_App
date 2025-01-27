import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";
const AllData = data;

const CompteurSlice = createSlice({
  name: "own",
  initialState: AllData,
  reducers: {
    increment: (state) => {
      return;
    }
  },
});

export const { increment, decrement, reset } = CompteurSlice.actions;
export default CompteurSlice.reducer;