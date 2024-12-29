import { ShapeFactory } from "../Factory/interface";

export interface AbstractFactory{
    createShapeFactory(factoryType: string): ShapeFactory;
}