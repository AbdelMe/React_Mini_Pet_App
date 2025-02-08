import { configureStore } from '@reduxjs/toolkit';
import DataSlice from '@/ReduxToolkit/DataSlice'
const StoreToolkit = configureStore({
  reducer: {
 Compt:DataSlice

  },
});


export default StoreToolkit;
