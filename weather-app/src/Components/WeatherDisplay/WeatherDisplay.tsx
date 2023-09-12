import styles from "./WeatherDisplay.module.scss";
import { WeatherDisplayProps } from "./WeatherDisplay.types.ts";
import WeatherIcon from "../../assets/WeatherIcon.svg";
import cloudIcon from "../../assets/cloudIcon.svg";
import Arrow from "../../assets/Arrow.svg";
import wind from "../../assets/wind.svg";
import Humidity from "../../assets/Humidity.svg";
import Rain from "../../assets/Rain.svg";

const WeatherDisplay: React.FC<WeatherDisplayProps> = ( {weatherData} ) => {
    const kelvinTemperature = weatherData.list[0].main.temp;
    const temperatureInCelsius = (kelvinTemperature - 273.15).toFixed(1);
  return (
    <div className={styles.container}>
      <div className={styles.weatherContainer}>
        <img
          src={WeatherIcon}
          alt="Weather Icon"
          className={styles.weatherIcon}
        />
        <div className={styles.details}>
          <div className={styles.details_temp}>
            <span className={styles.details_temperature}>{temperatureInCelsius}</span>
            <span className={styles.details_degree}>&deg;C</span>
          </div>
          <span className={styles.details_date}>17th Jun ‘21</span>
          <span className={styles.details_time}>Thrusday 2:45 am</span>
          <div className={styles.climate}>
            <img src={wind} alt="wind" />
            <span>
              Wind <span>10km/h </span>
            </span>
            <img src={Humidity} alt="Hum" />
            <span>
              Hum <span>54% </span>
            </span>
            <img src={Rain} alt="Rain" />
            <span>
              Rain <span>54% </span>
            </span>
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.weathercard}>
            <span className={styles.weathercard_temperature}>24 &deg;C</span>
            <img
              src={cloudIcon}
              alt="Cloud Icon"
              className={styles.weathercard_icon}
            />
            <span className={styles.weathercard_day}>Fri</span>
          </div>
          <div className={styles.weathercard}>
            <span className={styles.weathercard_temperature}>24 &deg;C</span>
            <img
              src={cloudIcon}
              alt="Cloud Icon"
              className={styles.weathercard_icon}
            />
            <span className={styles.weathercard_day}>Sat</span>
          </div>
          <div className={styles.weathercard}>
            <span className={styles.weathercard_temperature}>24 &deg;C</span>
            <img
              src={cloudIcon}
              alt="Cloud Icon"
              className={styles.weathercard_icon}
            />
            <span className={styles.weathercard_day}>Sun</span>
          </div>
          <div className={styles.weathercard}>
            <span className={styles.weathercard_temperature}>24 &deg;C</span>
            <img
              src={cloudIcon}
              alt="Cloud Icon"
              className={styles.weathercard_icon}
            />
            <span className={styles.weathercard_day}>Mon</span>
          </div>
          <img src={Arrow} alt="Arrow" className={styles.weathercard_arrow} />
        </div>
      </div>
    </div>
  );
};
export default WeatherDisplay;
