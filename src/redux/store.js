import { configureStore } from '@reduxjs/toolkit'
import authSlice from "./authSlice"
import collectionSlice from "./collectionSlice"
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    collection: collectionSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
})