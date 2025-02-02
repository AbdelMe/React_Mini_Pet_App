import { configureStore } from '@reduxjs/toolkit';
import DataSlice from './DataSlice'
const StoreToolkit = configureStore({
  reducer: {
 Compt:DataSlice

  },
});


export default StoreToolkit;
