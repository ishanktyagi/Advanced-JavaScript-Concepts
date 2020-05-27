// // ~~~~~~~~~~~~~~~~~~~JAVASCRIPTS NOTES~~~~~~~~~~~~~~~~~~

// //---------------------------Destructuring------------------
// const obj = {
//   player: "bobby",
//   experience: 100,
//   wizardLevel: false,
// };

// const player = obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;

// const { player, experience } = obj;
// let { wizardLevel } = obj;
// console.log(player, experience, wizardLevel);

// const name = "John Snow";

// // Dynamic property names
// const obj = {
//   [name]: "hello",
//   ["Steve" + " Smith"]: "hihi",
//   [`${name} is cool!`]: true,
// };

// console.log(obj);

// const a = "Ishank";
// const b = "true";
// const c = {};

// const obj = {
//   a: a,
//   b: b,
//   c: c,
// };
// // If property and value are same
// const obj = { a, b, c };

// console.log(obj);

// // --------------------------Default Arguments--------------

// function name(name = "Ishank", age = 33, pet = "cow") {
//   return `Hello ${name} you seem to be ${
//     age - 10
//   }. What a lovely ${pet} you have!`;
// }

// console.log(name("John", 40, "cat"));

// // ---------------------------Symbol-------------------------
// // Symbol create completely unique type
// let sym1 = Symbol();
// let sym2 = Symbol("foo");
// let sym3 = Symbol("foo");
// // sym2 !== sym3

// //-------------------------Arrow Function--------------------
// function add(a, b) {
//   return a + b;
// }
// const sum = (a, b) => a + b;
// const mul = (a, b) => {
//   return a * b;
// };
// console.log(mul(4, 2));

// // ------------------------Advanced Function--------------------
// const first = () => {
//   const greet = "Hi";
//   const second = () => {
//     alert(greet);
//   };
//   return second;
// };

// const newFunc = first();
// newFunc();

// // -------------------------Closures--------------------------
// // A function ran, the function executed, It's never going to execute again.
// // BUT it's going to remember that there are references to those variables
// // So the child scope always has access to the parent scope

// // --------------------------Currying-------------------------
// // The process of converting a func that takes multiple arguments to a func that takes them one at a time
// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// // Advantage like:
// const multiplyBy9 = curriedMultiply(9);
// console.log(multiplyBy9(5));

// //----------------------------Compose-----------------------------
// // The act of putting 2 func together to form a 3rd function where the output of one function is the input of second function
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// console.log(compose(sum, sum)(5));

// //-------------Avoiding Side Effects & Functional Purity--------
// // function has its own universe
// // Functional Purity : Avoid Side Effects and always return something (create something deterministic)
// // function by default return undefined
// let a = 2;
// const fun = () => {
//   a = 3; // Side Effect --> changing things outside its universe. Interaction with outside world;
// };

// // -----------------------Advanced Arrays--------------------------
// let array = [1, 2, 10, 16];
// double = [];
// const newArray = array.forEach((num) => {
//   double.push(num * 2);
// });
// console.log(double);

// // -----------------------Map, Filter, Reduce--------------------
// // Map
// let array = [1, 6, 3, 14];
// let mapArray = array.map((num) => num * 2);
// // Filter
// let filterArray = array.filter((num) => num > 5);
// // Reduce
// const reduceArray = array.reduce((accumulator, num) => {
//   return accumulator + num;
// }, 0);
// console.log(reduceArray);

// //---------Advanced Objects--Reference Type--Context--Instantiation----
// //--------------------------Reference type------------------
// // Reference Types are created by Programmer
// // Object literals, Arrays, Functions are reference type
// // Primitive types are defined by programming language
// const res1 = [] === []; //false
// const res2 = [1] === [1]; //false

// const obj1 = { value: 10 };
// const obj2 = obj1;
// const obj3 = { value: 10 };
// const res3 = obj1 === obj2; //true
// const res4 = obj1 === obj3; //false

// console.log(res4);

// //--------------------------Context------------------------
// //Context: What is the Object Environment we are in right now
// //this : Referes to the Object whose context we are in right now
// // scope created when we have {}
// const a = () => {
//   let ans = 0;
// }
// ans = 5; // out of scope

// const res = this === window; //true
// const obj = {
//   a: function () {
//     console.log(this);
//   },
// };
// obj.a();
// // NOTE: if we use => func inside object literal, it gives window;
// // check stackOverflow: arrow funcion inside object literal

// //-----------------------Instantiation--------------------
// class Player {
//   constructor(name, type) {
//     console.log("player", this);
//     this.name = name;
//     this.type = type;
//   }
//   introduce() {
//     console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
//   }
// }
// class Wizard extends Player {
//   constructor(name, type) {
//     super(name, type);
//     console.log("wizard", this);
//   }
//   play() {
//     console.log(`WEEEEEEEE I'm a ${this.type}`);
//   }
// }
// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Shawn", "Dark Magician");

// //--------------Classical Inheritance in JS----------------
// var Player = function (name, type) {
//   this.name = name;
//   this.type = type;
// };
// Player.prototype.introduce = function () {
//   console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
// };
// var wizard1 = new Player("Shelly", "Healer");
// var wizard2 = new Player("Shawn", "Dark Magician");
// wizard1.play = function () {
//   console.log(`WEEEEEEEEEE I'm a ${this.type}`);
// };
// wizard2.play = function () {
//   console.log(`WEEEEEEEEEE I', a ${this.type}`);
// };
// console.log(wizard1);

// //--------- Includes (Added on strings & Arrays)--------
// const res1 = "hello".includes("0"); // true;
// const pets = ["cat", "dog", "bat"];
// console.log(pets.includes("dog")); // true

// //-------------------Exponential Operator-----------------
// const square = (x) => x ** 2;
// const cube = (x) => x ** 3;

// console.log(square(7));
// console.log(cube(4));

// //------------- String Padding: .padStart(), .padEnd()---------
// const str = "Turtle";
// const str1 = str.padStart(10);
// const str2 = str.padEnd(10);
// console.log(str2);

// //------Trailing commas in Func's parameter list & calls---------
// const fun = (a, b, c, d,) => {
//   console.log(a);
// };
// fun(1, 2, 3, 4,);

// //------------- Object.values & Object.entries--------------
// // Earlier we had Object.keys
// let obj = {
//   username0: "Santa",
//   username1: "Rudolf",
//   username2: "Mr.Grinch",
// };
// Object.keys(obj).forEach((key, index) => {
//   console.log(key, obj[key]);
// });
// Object.values(obj).forEach((values) => {
//   console.log(values);
// });
// Object.entries(obj).forEach((entry) => {
//   console.log(entry);
// });
// const reduceArr = Object.entries(obj).map((value) => {
//   return value[1] + value[0].replace("username", "");
// });
// console.log(reduceArr);
// Async & Await(ES8 & ES9) require Knowledge of Asynchronous Javascript

// //--------------------flat()-------------------------------------
// const arr = [1, [2, [3], [4, 5]]];
// const val = arr.flat(2);
// // data cleanup
// const arr2 = ["bob", "sally", , , , , "Cindy"];
// const val2 = arr2.flat();

// //--------------------flatMap()--------------------------------

// const arr = ["1", ["2"], ["3", ["4"]], ["5", ["6", ["7", "8"]]]];
// const val = arr.flatMap((val) => val + 1);

// //----------------------Trim()---------------------------------
// const email1 = "        crimeMaster@gogo.com";
// const email2 = "mukambo@khushhua.com     ";
// const res1 = email1.trimStart();
// const res2 = email2.trimEnd();

// //-----------------------fromEntries()-------------------------
// //---------Opposite of Entries---------
// const obj = [
//   ["Ishank", 23],
//   ["Shashank", 27],
// ];
// const res = Object.fromEntries(obj);
// const res2 = Object.entries(res);
// console.log(res2);

// //------------------------Try & Catch------------------------
// //No need to pass parameter in catch(), if not required
// try {
//   console.log(true + " hi");
// } catch {
//   console.log("you messed Up!");
// }

// //----------------------------Advanced Loops---------------------
// // for of  loop : work with Iterables
// // Iterating!!!!  Arrays, Strings----Iteratables
// const basket = ["apples", "oranges", "grapes"];
// for (item of basket) {
//   console.log(item);
// }

// // for in loop : work with Enumerables
// // enumerating!!!!  Objects are Enumerables, if it allows to see its properties
// // work with Objects, loop over & see Object Properties
// const detailedbasket = {
//   apples: 5,
//   oranges: 10,
//   grapes: 100,
// };
// for (item in detailedbasket) {
//   console.log(item);
// }

// //---------------------------Debugger-----------------------------
// const flattened = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((a, b) => a.concat(b), []);
//  ||
// _||_
// \  /
//  \/

// const same = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ].reduce((accumulator, array) => {
//   debugger;
//   return accumulator.concat(array);
// }, []);

// //---------------------Modules-----------------------------

// How we evolved in using JS in our Website:
// a) Inline script:
//   1. Lack of Code Reusability (Copy & Paste)
//   2. Pollution of Global Namespace (Name Collisions)

// b) Script Tag:
//   1. Still need to Copy & Paste Tags (if adding new Adding new Page)
//   2. Lack of Depenedency Resolution (Scripts should be added in proper Order)
//   3. Pollution of Global Namespace

// c) IIFE:
//   // JS1 first file loaded
//     let MyApp = {};
//   // JS2
//     (function(){
//       MyApp.add = function(a, b) {
//         return a*b;
//       }
//     })();
//   // No Pollution of Global Namespace
//     1. Still Dependency Resolution

// d) CommonJS + Browserify:
//   Module Bundler : Create One massive File.js
//   // JS!
//   module.exports = function add(a, b) {
//     return a*b;
//   }
//   // JS2
//   let add = require("./add");

// e) ES6 + Webpack2
//   // JS1
//   export const add = (a, b) => a+b;
//   // or
//   export default function add() {
//     return a+b;
//   }

//   // JS2
//   import {add} from "./add"; // Destructuring syntax
//   // or
//   import add from "./add";
