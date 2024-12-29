"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmoothShapeFactory = void 0;
const circle_1 = require("../Object/circle");
const curve_1 = require("../Object/curve");
class SmoothShapeFactory {
    createShape(shape) {
        if (shape == "cicle")
            return new circle_1.Circle();
        else
            return new curve_1.Curve();
    }
}
exports.SmoothShapeFactory = SmoothShapeFactory;
