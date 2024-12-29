import { Shape } from "./interface";

export class Rectangle implements Shape{
    draw(): string {
        return "Drew a Rectangle";
    }
}