import { Mozorella } from "./PizzaBase/mozorella";
import { Cheese } from "./PizzaToppings/cheese";
import { Jalepenos } from "./PizzaToppings/jalepenos";

let myPizza = new Mozorella();
console.log(`Base Mozorella Pizza: ${myPizza.cost()}`);
myPizza = new Cheese(myPizza);
console.log(`Price with Cheese: ${myPizza.cost()}`);
myPizza = new Jalepenos(myPizza);
console.log(`Price with Cheese and jalepenos: ${myPizza.cost()}`);
