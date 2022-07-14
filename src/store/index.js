import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import nasaImagesReducer from './nasaImagesSlice';
import nasaAssetsReducer from './nasaAssetsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    nasaImages: nasaImagesReducer,
    nasaAssets: nasaAssetsReducer
  },
});
