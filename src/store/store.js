import { configureStore } from '@reduxjs/toolkit'
import { packageSlice } from './slices/package';

export const store = configureStore({
  reducer: {
    package: packageSlice.reducer,
  },
})