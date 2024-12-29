import { Subject } from "../Subject/interface";
import { Observer } from "./interface";

export class Cooler implements Observer{

    private subject: Subject;

    constructor(subject: Subject){
        this.subject = subject;
        this.subject.registerObserver(this);
    }

    update(temp: number) {
        console.log("Temprature from Cooler: ", temp);
    }
    
}