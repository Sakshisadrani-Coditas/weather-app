import LightingConditions from "../LightingConditions/LightingConditions.tsx";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay.tsx";
import styles from "./WeatherAppHome.module.scss"; 
import { WeatherAppHomeProps } from "./WeatherAppHome.types.ts" 
 
const WeatherAppHome: React.FC<WeatherAppHomeProps> = () => {

    return(
        <>
         <div className={styles.container}>
    <WeatherDisplay />
    <LightingConditions />
        </div></>
       
    )
} 
 
export default WeatherAppHome 
