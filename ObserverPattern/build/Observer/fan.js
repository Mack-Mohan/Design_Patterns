"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fan = void 0;
class Fan {
    constructor(subject) {
        this.a = 0;
        this.subject = subject;
        this.subject.registerObserver(this);
    }
    update(temp) {
        console.log("Temprature from fan: ", temp);
        this.a = temp;
    }
}
exports.Fan = Fan;
