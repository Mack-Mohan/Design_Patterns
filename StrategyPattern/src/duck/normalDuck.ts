import { FlyMethods } from "../flyMethods/interface";
import { Duck } from "./interface";

export class NormalDuck implements Duck{
    fly: FlyMethods;

    constructor(fly: FlyMethods){
        this.fly = fly;
    }
}