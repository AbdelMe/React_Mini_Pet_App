import { configureStore } from '@reduxjs/toolkit';
import CompteurSlice from './DataSlice'
const StoreToolkit = configureStore({
  reducer: {
 Compt:CompteurSlice

  },
});


export default StoreToolkit;
