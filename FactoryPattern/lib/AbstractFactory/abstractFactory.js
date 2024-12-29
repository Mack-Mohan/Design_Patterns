"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractShapeFactory = void 0;
const edgedShapeFactory_1 = require("../Factory/edgedShapeFactory");
const smoothShapeFactory_1 = require("../Factory/smoothShapeFactory");
class AbstractShapeFactory {
    createShapeFactory(factoryType) {
        if (factoryType == "smooth")
            return new smoothShapeFactory_1.SmoothShapeFactory();
        else
            return new edgedShapeFactory_1.EdgedShapeFactory();
    }
}
exports.AbstractShapeFactory = AbstractShapeFactory;
