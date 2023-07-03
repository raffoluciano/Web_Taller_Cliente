import { createSlice } from '@reduxjs/toolkit'
//carga los paquetes al estado global para pedirlos despues
const initialState = {
  packages: [],
  isLoading: true,
}

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    setPackages: (state,action) => {
      state.packages = action.payload
      state.isLoading = false
    },
    setLoading: (state,action) => {
        state.isLoading = action.payload
    }
   
  },
})

export const { setPackages, setLoading } = packageSlice.actions
