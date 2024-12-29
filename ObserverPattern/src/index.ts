import { Cooler } from "./Observer/cooler";
import { Fan } from "./Observer/fan";
import { WeatherStation } from "./Subject/weatherStation";

const weatherStation = new WeatherStation(2);

const fan = new Fan(weatherStation);
const cooler = new Cooler(weatherStation);

weatherStation.setState(14);

console.log(fan.a);