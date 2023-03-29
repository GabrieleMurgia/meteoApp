import { format, isToday } from 'date-fns';
import { it } from 'date-fns/locale';
import classes from './weather-item.module.css';

export interface WeatherItemProps {
	item:any
}

export const WeatherItem = (props: WeatherItemProps) => {
	const {item } = props
	
	if (!item) return null;

    const date = new Date(item.datetime);
    const dayOfWeek = isToday(date) ? "OGGI" : format(date, 'EEEE', { locale: it });

    return (
      <div className={classes['weather-item']}>
        <span>{dayOfWeek}</span>
        <img src={`https://www.weatherbit.io/static/img/icons/${item.weather.icon}.png`} alt={item.weather.icon} />
        <span>{item.min_temp.toFixed(1)}°C / {item.max_temp.toFixed(1)}°C</span>
      </div>
    );
};