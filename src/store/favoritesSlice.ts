import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherCardData } from '../interfaces/weatherCardData';

interface FavoritesState {
  list: WeatherCardData[];
}

const initialState: FavoritesState = {
  list: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<WeatherCardData>) => {
      const cityAlreadyExists = state.list.some(
        (item) => item.city_name === action.payload.city_name
      );
        if(!cityAlreadyExists){
          state.list.push(action.payload);
        }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(
        (item) => item.city_name !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;