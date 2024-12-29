"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cheese = void 0;
const toppings_1 = require("./toppings");
class Cheese extends toppings_1.Toppings {
    constructor(base) {
        super();
        this.base = base;
    }
    cost() {
        return this.base.cost() + 20;
    }
}
exports.Cheese = Cheese;
