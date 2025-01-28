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


export const {} = CompteurSlice.actions;
export default CompteurSlice.reducer;