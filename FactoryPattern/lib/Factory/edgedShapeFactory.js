"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EdgedShapeFactory = void 0;
const rectangle_1 = require("../Object/rectangle");
const square_1 = require("../Object/square");
class EdgedShapeFactory {
    createShape(shape) {
        if (shape == "square")
            return new square_1.Square;
        else
            return new rectangle_1.Rectangle;
    }
}
exports.EdgedShapeFactory = EdgedShapeFactory;
