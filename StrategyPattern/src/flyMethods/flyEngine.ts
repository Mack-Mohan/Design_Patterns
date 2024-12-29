import { FlyMethods } from "./interface";

export class EngineFly implements FlyMethods{
    fly(): string{
        return "I fly with an engine";
    }
}