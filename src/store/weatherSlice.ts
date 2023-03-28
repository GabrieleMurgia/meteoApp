import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherCardData } from '../interfaces/weatherCardData'; 

interface WeatherState {
  cards: WeatherCardData[];
}

const initialState: WeatherState = {
  cards: [],
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addWeatherCard: (state, action: PayloadAction<WeatherCardData>) => {
      const cityAlreadyExists = state.cards.some(
        (item) => item.city_name === action.payload.city_name
      );

      if (!cityAlreadyExists) {
        state.cards = []
        state.cards.push(action.payload);
      }
    },
  },
});

export const { addWeatherCard } = weatherSlice.actions;
export default weatherSlice.reducer;