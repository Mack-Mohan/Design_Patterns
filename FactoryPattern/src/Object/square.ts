import { Shape } from "./interface";

export class Square implements Shape{
    draw(): string {
        return "Drew a Square";
    }
}