import { useEffect, useState } from 'react';
import classes from './city-details.module.css';
import { fetchWeatherForecast } from '../../services/weatherService';
import { useParams } from 'react-router-dom';
import { Loading } from './components/Loading/Loading';
import { WeatherItem } from './components/WeatherItem/WeatherItem';

export interface CityDetailsProps {
}

export const CityDetails = (props: CityDetailsProps) => {

  const { cityId } = useParams();
  const [weatherData, setWeatherData] = useState<any[]>([]);

  useEffect(() => {
    if (cityId) {
      const fetchData = async () => {
        try {
          const forecastData = await fetchWeatherForecast(cityId);
          setWeatherData(forecastData.data);
        } catch (error: any) {
          console.error('Error fetching weather data:', error.response.data);
        }
      };
      fetchData();
    }
  }, [cityId]);

  return (
    weatherData.length > 0 ? (
      
      <div className={classes["container"]}>
        <span className={classes['forecasts-message']}>
          Le previsioni per 7 giorni
        </span>
        {weatherData.length > 0 && (
           <div className={classes['container-details']}>
           {weatherData.map((item) => (
             <WeatherItem item={item} key={item.datetime} />
           ))}
         </div>
        )}
      </div>
    ) : (
      <div className={classes["container"]}>
        <Loading />
      </div>
    )
  );
};

export default CityDetails;