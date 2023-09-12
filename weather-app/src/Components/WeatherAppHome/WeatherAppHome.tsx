import { useEffect, useState } from "react";
import LightingConditions from "../LightingConditions/LightingConditions.tsx";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay.tsx";
import styles from "./WeatherAppHome.module.scss"; 
import { WeatherAppHomeProps } from "./WeatherAppHome.types.ts" 
import axios from 'axios';
 
const WeatherAppHome: React.FC<WeatherAppHomeProps> = () => {
    const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        const apiKey = '983c9b9f9368fce8ab9a26753845ba69';
        const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        try {
          const response = await axios.get(apiUrl);
          setWeatherData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
          setLoading(false);
        }
      }, (error) => {
        console.error('Error getting geolocation:', error);
        setLoading(false);
      });
    } else {
      console.error('Geolocation is not available in this browser.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return <div>Unable to fetch weather data.</div>;
  }
  console.log(weatherData);

  
    return(
        <>
         <div className={styles.container}>
    <WeatherDisplay weatherData={weatherData} />
    <LightingConditions weatherData={weatherData}  />
        </div></>
       
    )
} 
 
export default WeatherAppHome 
