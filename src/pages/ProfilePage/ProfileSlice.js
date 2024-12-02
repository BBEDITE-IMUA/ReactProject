import { createSlice } from '@reduxjs/toolkit'

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    value: null
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    clear: state => {
      state.value = []
    },
  }
})

export const { set, clear } = profileSlice.actions

export default profileSlice.reducer
