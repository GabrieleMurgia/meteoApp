import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { getCurrentWeather } from '../../services/weatherService';
import { WeatherCardData } from '../../interfaces/weatherCardData';

import classes from './home.module.css';
import { CardWeather } from '../../components/CardWeather/CardWeather';

export interface HomeProps {}

export const Home = (props: HomeProps) => {
  const [weatherCollection, setWeatherCollection] = useState<WeatherCardData[]>([]);
  const [userLocation, setUserLocation] = useState<{ latitude?: number; longitude?: number; city?: string } | null>(null);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    if (userLocation) {
      if (userLocation && userLocation.latitude !== undefined && userLocation.longitude !== undefined) {
        getCurrentWeather(userLocation.latitude, userLocation.longitude)
          .then((data) => {
            console.log(data);
            const newWeatherData: WeatherCardData = {
              city_name: data.city_name,
              weather: {
                description: data.weather.description,
                icon: data.weather.icon,
              },
              temp: data.temp,
              wind_spd: data.wind_spd,
              rh: data.rh,
            };
            addWeatherData(newWeatherData);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [userLocation]);

  const addWeatherData = (newWeatherData: WeatherCardData) => {
    setWeatherCollection((prev) => {
      const cityAlreadyExists = prev.some(
        (item) => item.city_name === newWeatherData.city_name
      );

      if (cityAlreadyExists) {
        return prev;
      } else {
        return [...prev, newWeatherData];
      }
    });
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error obtaining user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSearch = async () => {
    try {
      const data = await getCurrentWeather(undefined, undefined, cityName);
      const newWeatherData: WeatherCardData = {
        city_name: data.city_name,
        weather: {
          description: data.weather.description,
          icon: data.weather.icon,
        },
        temp: data.temp,
        wind_spd: data.wind_spd,
        rh: data.rh,
      };

      addWeatherData(newWeatherData);
    } catch (error) {
      console.error(error);
    }
  };

	return (
		<div className={classes["container"]}>
  <Navbar />
  <div className={classes["container-home"]}>

    <div className={classes["search-container"]}>
     <div>
     <button className={classes["location-button"]} onClick={handleLocation}>
        Utilizza la mia posizione
      </button>
     </div>
     <div>
     <input
        type="text"
        className={classes["search-input"]}
        placeholder="Cerca una località"
        onChange={(e) => setCityName(e.target.value)}
      />
	  
      <button className={classes["search-button"]} onClick={handleSearch}>
        Cerca
      </button>
     </div>
    </div>

    {weatherCollection && (
      <div className={classes["weather-card-container"]}>
     {weatherCollection.map((weatherItem) => {
      return <CardWeather key={weatherItem.city_name} {...weatherItem} />;
      })}
      </div>
    )}
  </div>
</div>
	);
};