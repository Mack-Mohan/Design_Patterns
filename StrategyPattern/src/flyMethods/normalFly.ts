import { FlyMethods } from "./interface";

export class NormalFly implements FlyMethods{
    fly(): string{
        return "I fly normally";
    }
}