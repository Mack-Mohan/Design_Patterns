"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mozorella_1 = require("./PizzaBase/mozorella");
const cheese_1 = require("./PizzaToppings/cheese");
const jalepenos_1 = require("./PizzaToppings/jalepenos");
let myPizza = new mozorella_1.Mozorella();
console.log(`Base Mozorella Pizza: ${myPizza.cost()}`);
myPizza = new cheese_1.Cheese(myPizza);
console.log(`Price with Cheese: ${myPizza.cost()}`);
myPizza = new jalepenos_1.Jalepenos(myPizza);
console.log(`Price with Cheese and jalepenos: ${myPizza.cost()}`);
