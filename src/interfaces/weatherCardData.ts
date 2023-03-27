export interface WeatherCardData {
    city_name: string;
    weather: {
      description: string;
      icon: string;
    };
    temp: number;
    wind_spd: number;
    rh: number;
  }