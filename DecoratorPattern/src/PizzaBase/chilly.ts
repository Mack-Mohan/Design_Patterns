import { PizzaBase } from "./base";

export class ChillyPizza extends PizzaBase{
    public cost(): number {
        return 200;
    }
}