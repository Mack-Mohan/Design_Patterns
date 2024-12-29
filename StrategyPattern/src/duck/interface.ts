import { FlyMethods } from "../flyMethods/interface";

export interface Duck{
    // not including the implementation but an object of the interface that implements the functionality
    // fly(): string;  
    fly: FlyMethods;
}