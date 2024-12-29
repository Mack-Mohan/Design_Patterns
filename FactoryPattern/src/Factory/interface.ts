import { Shape } from "../Object/interface";

export interface ShapeFactory{
    createShape(shape: string): Shape;
}