import { Shape } from "./interface";

export class Circle implements Shape{
    draw(): string {
        return "Drew a Cicle";
    }
}