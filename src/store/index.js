import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import nasaImagesReducer from './nasaImagesSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nasaImages: nasaImagesReducer
  },
});
