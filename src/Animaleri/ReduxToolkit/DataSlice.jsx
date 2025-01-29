import { createSlice } from "@reduxjs/toolkit";
import data from "../Data";
const AllData = data;

const DataSlice = createSlice({
  name: "own",
  initialState: AllData,
  reducers: {
    AddToPet: (state,action) => {
      {state.DataBase.Adopt_Pet = [...state.DataBase.Adopt_Pet,action.payload]};
    },
    AddToCart: (state,action)=>{
      return
    }
  },
});


export const {AddToPet} = DataSlice.actions;
export default DataSlice.reducer;