import { configureStore } from '@reduxjs/toolkit';
import weatherSlice from './weatherSlice';
import favoritesSlice from './favoritesSlice';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    favorites: favoritesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;