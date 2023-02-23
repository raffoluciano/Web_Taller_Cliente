import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  packages: [],
  isLoading: true,
}

export const packageSlice = createSlice({
  name: 'package',
  initialState,
  reducers: {
    setPackages: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.packages = action.payload
      state.isLoading = false
    },
    setLoading: (state,action) => {
        state.isLoading = action.payload
    }
    // decrement: (state) => {
    //   state.value -= 1
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setPackages, setLoading } = packageSlice.actions
