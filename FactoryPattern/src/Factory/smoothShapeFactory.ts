import { Circle } from "../Object/circle";
import { Curve } from "../Object/curve";
import { Shape } from "../Object/interface";
import { ShapeFactory } from "./interface";

export class SmoothShapeFactory implements ShapeFactory{
    createShape(shape: string): Shape {
        if(shape == "cicle")return new Circle();
        else return new Curve();
    }

}