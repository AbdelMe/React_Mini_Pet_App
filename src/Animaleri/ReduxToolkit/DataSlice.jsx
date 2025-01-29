/* eslint-disable no-lone-blocks */
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
      {state.DataBase.Cart = [...state.DataBase.Cart,action.payload]}
    },
    DeleteFromCart: (state,action)=>{
      {state.DataBase.Cart.splice(action.payload,1)}
    },
    AddToFavourit: (state,action)=>{
      {state.DataBase.Favourite = [...state.DataBase.Favourite,action.payload]}
    },
  },
});


export const {AddToPet , AddToCart, AddToFavourit, DeleteFromCart} = DataSlice.actions;
export default DataSlice.reducer;