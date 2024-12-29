import { Subject } from "../Subject/interface";
import { Observer } from "./interface";

export class Fan implements Observer{

    private subject: Subject;
    public a: number = 0;

    constructor(subject: Subject){
        this.subject = subject;
        this.subject.registerObserver(this);
    }

    update(temp: number) {
        console.log("Temprature from fan: ", temp);
        this.a = temp;
    }
    
}