import { FlyMethods } from "../flyMethods/interface";
import { Duck } from "./interface";

export class WoodenDuck implements Duck{
    fly: FlyMethods;

    constructor(fly: FlyMethods){
        this.fly = fly;
    }
}