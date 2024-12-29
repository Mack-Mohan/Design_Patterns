import { FlyMethods } from "./interface";

export class NoFly implements FlyMethods{
    fly(): string{
        return "I do not fly";
    }
}