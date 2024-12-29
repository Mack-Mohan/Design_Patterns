import { AbstractShapeFactory } from "./AbstractFactory/abstractFactory";

let abstractFactory = new AbstractShapeFactory();
let smoothShapeFactory = abstractFactory.createShapeFactory("smooth");
let circle = smoothShapeFactory.createShape("cicle");
let curve = smoothShapeFactory.createShape("curve");
console.log(circle.draw());
console.log(curve.draw());

let edgedShapeFactory = abstractFactory.createShapeFactory("edged");
let square = edgedShapeFactory.createShape("square");
let rectangle = edgedShapeFactory.createShape("rectangle");
console.log(square.draw());
console.log(rectangle.draw());
