import { PizzaBase } from "../PizzaBase/base";
import { Toppings } from "./toppings";

export class Jalepenos extends Toppings{
    base: PizzaBase;

    constructor(base: PizzaBase){
        super();
        this.base = base;
    }

    public cost(): number {
        return this.base.cost() + 10;
    }

}