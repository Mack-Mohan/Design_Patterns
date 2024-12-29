"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cooler = void 0;
class Cooler {
    constructor(subject) {
        this.subject = subject;
        this.subject.registerObserver(this);
    }
    update(temp) {
        console.log("Temprature from Cooler: ", temp);
    }
}
exports.Cooler = Cooler;
