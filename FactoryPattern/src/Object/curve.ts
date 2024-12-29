import { Shape } from "./interface";

export class Curve implements Shape{
    draw(): string {
        return "Drew a Curve";
    }
}