import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice';
import { packageSlice } from './slices/package';


export const store = configureStore({
  reducer: {
    package: packageSlice.reducer,
    auth: authSlice.reducer
  },
})