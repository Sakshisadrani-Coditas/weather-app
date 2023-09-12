import styles from "./LightingConditions.module.scss";
import { LightingConditionsProps } from "./LightingConditions.types.ts";
import UVIndex from "../../assets/UVIndex.svg";
import AirQuality from "../../assets/AirQuality.svg";

const LightingConditions: React.FC<LightingConditionsProps> = (weatherData) => {
  return (
    <div className={styles.container}>
      <div className={styles.lightingConditions}>
        <div>
          <span>Sunrise</span>
          <div className={styles.lightingConditions_sunrise}></div>
        </div>
        <div>
          <span>Golden Hour</span>
          <div className={styles.lightingConditions_goldenHour}></div>
        </div>
        <div>
          <span>Sunset</span>
          <div className={styles.lightingConditions_sunset}></div>
        </div>
      </div>

      <div className={styles.footer}>
        <div>
          <p>Air Quality</p>
          <img src={AirQuality} alt="Air Quality" />
        </div>
        <div>
          <p>UV Index</p>
          <img src={UVIndex} alt="UV Index" />
        </div>
      </div>
    </div>
  );
};

export default LightingConditions;
