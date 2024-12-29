import { Shape } from "../Object/interface";
import { Rectangle } from "../Object/rectangle";
import { Square } from "../Object/square";
import { ShapeFactory } from "./interface";

export class EdgedShapeFactory implements ShapeFactory{
    createShape(shape: string): Shape {
        if(shape == "square")return new Square;
        else return new Rectangle;
    }

}