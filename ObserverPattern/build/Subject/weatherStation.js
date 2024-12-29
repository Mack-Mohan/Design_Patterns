"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherStation = void 0;
class WeatherStation {
    constructor(temprature) {
        this.observers = [];
        this.temprature = temprature;
    }
    setState(temp) {
        this.temprature = temp;
        this.notify();
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let i = this.observers.indexOf(observer);
        this.observers.splice(i, 1);
    }
    notify() {
        for (let o of this.observers)
            o.update(this.temprature);
    }
}
exports.WeatherStation = WeatherStation;
