"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cooler_1 = require("./Observer/cooler");
const fan_1 = require("./Observer/fan");
const weatherStation_1 = require("./Subject/weatherStation");
const weatherStation = new weatherStation_1.WeatherStation(2);
const fan = new fan_1.Fan(weatherStation);
const cooler = new cooler_1.Cooler(weatherStation);
weatherStation.setState(10);
