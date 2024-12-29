"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jalepenos = void 0;
const toppings_1 = require("./toppings");
class Jalepenos extends toppings_1.Toppings {
    constructor(base) {
        super();
        this.base = base;
    }
    cost() {
        return this.base.cost() + 10;
    }
}
exports.Jalepenos = Jalepenos;
