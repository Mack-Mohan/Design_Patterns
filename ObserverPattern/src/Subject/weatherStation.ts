import { Observer } from "../Observer/interface";
import { Subject } from "./interface";

export class WeatherStation implements Subject {
    
    private temprature: number;
    private observers: Observer[] = [];

    
    constructor(temprature: number){
        this.temprature = temprature;
    }

    setState(temp: number) {
        this.temprature = temp;
        this.notify();
    }

    registerObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {
        let i = this.observers.indexOf(observer);
        this.observers.splice(i, 1);
    }

    notify() {
        for(let o of this.observers)o.update(this.temprature);
    }
}