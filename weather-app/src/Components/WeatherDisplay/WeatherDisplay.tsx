import styles from "./WeatherDisplay.module.scss";
import { WeatherDisplayProps } from "./WeatherDisplay.types.ts";
import WeatherIcon from "../../assets/WeatherIcon.svg";
const WeatherDisplay: React.FC<WeatherDisplayProps> = () => {
  return (
    <div className={styles.container}>
      <img src={WeatherIcon} alt="Weather Icon" className={styles.weatherIcon} />
      
    </div>
  );
};
export default WeatherDisplay;
