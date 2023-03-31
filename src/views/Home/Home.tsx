import { useEffect, useState } from 'react';
import { getCurrentWeather } from '../../services/weatherService';
import { WeatherCardData } from '../../interfaces/weatherCardData';
import { CurrentWeatherData } from '../../interfaces/currentWeather';
import classes from './home.module.css';
import { CardWeather } from '../../components/CardWeather/CardWeather';
import { useDispatch, useSelector } from 'react-redux';
import { addWeatherCard } from '../../store/weatherSlice';
import { RootState } from '../../store/store';
import { ToastContainer, toast } from 'react-toastify';
import { Welcomecomponent } from './components/Welcomecomponent/Welcomecomponent';
import { Loadingcard } from './components/Loadingcard/Loadingcard';

export interface HomeProps {}

export const Home = (props: HomeProps) => {
  const weatherCollection = useSelector((state:RootState) => state.weather.cards);
  const dispatch = useDispatch();
  const [userLocation, setUserLocation] = useState<{ latitude?: number; longitude?: number; city?: string } | null>(null);
  const [cityName, setCityName] = useState<string>("");
  const [isLoading,setIsLoading] = useState<boolean>(false)

  const showErrorToast = (error:any) => {
    toast.error(`${error}`,{autoClose:500});
  };


  const createWeatherCardData = (data: CurrentWeatherData): WeatherCardData => {
    return {
      city_name: data.city_name,
      weather: {
        description: data.weather.description,
        icon: data.weather.icon,
      },
      temp: data.temp,
      wind_spd: data.wind_spd,
      rh: data.rh,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      
        if (userLocation && userLocation.latitude !== undefined && userLocation.longitude !== undefined) {
          try {
            setIsLoading(true);
            const data = await getCurrentWeather(userLocation.latitude, userLocation.longitude);
            const newWeatherData = createWeatherCardData(data);
            dispatch(addWeatherCard(newWeatherData));
          } catch (error) {
            showErrorToast(`Errore : ${error}`)
          } finally {
            setTimeout(()=>{
              setIsLoading(false);
            },1000)
          }
        }
 
    }
  
    fetchData();
  }, [dispatch, userLocation]);

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
          showErrorToast(`Errore nel geolocalizzare il tuo dispositivo`)
        }
      )
    }
  };

  const handleSearch = async () => {
    setIsLoading(true); 
  
    try {
      const data = await getCurrentWeather(undefined, undefined, cityName);
      const newWeatherData = createWeatherCardData(data);
      dispatch(addWeatherCard(newWeatherData));
    } catch (error) {
      showErrorToast(`Errore : ${error}`)
    }
  
    setTimeout(()=>{
      setIsLoading(false);
    },1000)
  };

	return (
    <div className={classes["container"]}>
 
         <div className={classes["search-container"]}>
          <div>
            <button className={classes["location-button"]} onClick={handleLocation}>
              Utilizza la mia posizione
            </button>
          </div>
          <div className={classes["search-container-bottom"]}>
            <input
              type="text"
              className={classes["search-input"]}
              placeholder="Cerca una località"
              onChange={(e) => setCityName(e.target.value)}
            />
            <button className={classes["search-button"]} onClick={handleSearch} disabled={cityName.length === 0}>
              Cerca
            </button>
          </div>
        </div>

        {
          weatherCollection.length === 0 && <Welcomecomponent></Welcomecomponent>
        }
         {isLoading && <Loadingcard></Loadingcard>}
  
        {weatherCollection && (
          <div className={classes["weather-card-container"]}>
            {weatherCollection.map((weatherItem) => {
              return <CardWeather key={weatherItem.city_name} weatherData={weatherItem} />;
            })}
          </div>
        )}
    </div>
  );
};