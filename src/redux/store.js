import { configureStore } from '@reduxjs/toolkit'
import { userData } from './dataSlice'

export const store = configureStore({
  reducer: {
    userdata: userData
  },
})