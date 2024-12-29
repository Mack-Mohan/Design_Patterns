import { EdgedShapeFactory } from "../Factory/edgedShapeFactory";
import { ShapeFactory } from "../Factory/interface";
import { SmoothShapeFactory } from "../Factory/smoothShapeFactory";
import { AbstractFactory } from "./interface";

export class AbstractShapeFactory implements AbstractFactory{
    createShapeFactory(factoryType: string): ShapeFactory {
        if(factoryType == "smooth")return new SmoothShapeFactory();
        else return new EdgedShapeFactory();
    }

}