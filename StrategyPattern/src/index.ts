import { NormalDuck } from "./duck/normalDuck";
import { WoodenDuck } from "./duck/woodenDuck";
import { NoFly } from "./flyMethods/canNotFly";
import { EngineFly } from "./flyMethods/flyEngine";
import { NormalFly } from "./flyMethods/normalFly";

let noFly = new NoFly();
let engineFly = new EngineFly();
let normalFly = new NormalFly();

let normalDuck = new NormalDuck(normalFly);
console.log(normalDuck.fly.fly());

let woodenDuck = new WoodenDuck(noFly);
console.log(woodenDuck.fly.fly());

let woodenDuckWithEngine = new WoodenDuck(engineFly);
console.log(woodenDuckWithEngine.fly.fly());
