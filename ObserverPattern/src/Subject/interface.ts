import { Observer } from "../Observer/interface";

export interface Subject {
    setState(temp: number);
    registerObserver(observer:Observer);
    removeObserver(observer: Observer);
    notify();
}