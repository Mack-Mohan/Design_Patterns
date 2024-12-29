import { PizzaBase } from "../PizzaBase/base";

export abstract class Toppings extends PizzaBase{
    base: PizzaBase;

    public abstract cost(): number;
}