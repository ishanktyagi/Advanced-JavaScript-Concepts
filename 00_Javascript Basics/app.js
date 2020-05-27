// // ~~~~~~~~~~~~~~~~~~~JAVASCRIPTS NOTES~~~~~~~~~~~~~~~~~~

// //-------------------------Console-----------------------
// console.log("Hello World");

// console.log(123);

// let greeting = "hello";

// console.log(greeting);

// console.log([1,2,3,4]);

// console.log({a:1, b:2});

// console.table({a:1, b:2});

// console.error('This is some error');

// console.clear();

// console.warn("This is a warning");

// console.time('Hello');
//     console.log("hii");
//     console.log("hii");
//     console.log("hii");
//     console.log("hii");
//     console.log("hii");
//     console.log("hii");
//     console.log("hii");
// console.timeEnd('Hello');

// //------------------------variables------var, let, const

// var name = "John Doe";
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// // Init var
// console.clear();
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // letters, numbers, _, $
// // Can not start with number

// // Not preferred
// var $name = 'John';
// var _name = 'Doe';

// // Multi word vars
// var firstName = 'John'; // camel case
// var first_name = 'Sara'; // Unserscore
// var FirstName = 'Tom'; // Pascal case
// var firstname;

// // LET
// let name;
// name  = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // const
// const name = 'Ishank';
// console.log(name);
// //cannot re-assign;
// name  = 'tyagi';  //error;
// //Have to assign a value to a const var
// const greeting;  //error;

// //const with object;
// const person = {
//     name: 'Ishank',
//     age: 21
// }
// person.name = 'Tyagi';
// console.log(person);

// //const with array
// const num = [1,2,3,4,5];
// num.push(6);
// num = [6,7,8,9,10]; //error
// console.log(num);

// //----------------DataTypes-----primitive & reference-----
// // Dynamically typed -- Types are associated with values not with variable

// //primitive
// // String
// const name = 'Ishank';
// console.log(typeof name);

// // Number
// const age = 21;
// console.log(typeof age);

// // Boolean
// const hasKids = false;

// // NUll
// const car = null;

// // Undefined
// let test;

// // Symbol
// const sym = Symbol();

// // Reference type --Objects
// // Array
// const hobbies = ['movies', 'music'];

// // Object literal
// const address = {
//     city:   'Boston',
//     state:  'MA'
// }

// // Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// //---------------Type Conversion----Type coersion------------

// // Type conversion
// let val;
// // string conversion
// // Number to string
// val = String(555);
// val = String(4+4);

// // Boolean  to String
// val = String(true);

// // Date to String
// val = String(new Date());

// // NULl to String
// val = String(null);

// // Array to String
// val = String([1,2,3,4]);

// // toString()
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = Number('5');

// // Boolean to Number
// val = Number(true);
// val = Number(false);

// //Null to Number
// val = Number(null);

// // alpha string to Number
// val = Number("Hello");  // NaN

// // Array to Number
// val = Number([1,2,3,4]); // NaN

// // parseInt()
// val = parseInt('100.30');

// // parseFloat
// val = parseFloat('100.31');

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);
// console.log(val.toFixed(2));

// //  Type Coersion
// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;
// const sum2 = parseInt(val1) + val2;
// console.log(sum);
// console.log(typeof sum);
// console.log(sum2);
// console.log(typeof sum2);

// //-------------------The Math  Object---------------------
// const num1 = 100;
// const num2 = 50;
// let val;
// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(4.1);
// val = Math.floor(2.8);
// val = Math.sqrt(25);
// val = Math.abs(-3.4);
// val = Math.pow(7,41);
// val = Math.min(2,-3,1,1,31,21,212,1);
// val = Math.max(2,12,12,12323242,3,2,32,3);
// val = Math.random();
// val = Math.floor(Math.random()*20 + 1);
// console.log(val);

// //---------------------String Methods----------------

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 22;
// const str = "Hllo there my name is Ishank";
// const tags = "web design, web developemnt, web programming";
// let val;
// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Ishank ';
// val += 'Tyagi'
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // to upperCase
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();
// val = firstName[3];

// // IndexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt(0);

// // Get last char
// val = firstName.charAt(firstName.length-1);

// // Substring()
// val = firstName.substring(0, 4);

// // slice() ---use with arrays
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Ishank', 'Brad')

// // includes()
// val = str.includes('foo');
// console.log(val);

// //-------------------------Template literals---------------
// const name = 'Ishank';
// const age = 22;
// const job = 'web developer';
// const city = 'Meerut';

// // Without template string (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job+ ' </li><li>City: '+ city +' </li></ul>';

// html = '<ul>' +
//         '<li>Name : ' + name + '</li>' +
//         '<li>Age : ' + age + '</li>' +
//         '<li>Job : ' + job + '</li>' +
//         '<li>City : ' + city + '</li>' +
//         '</ul>' ;

// function hello(){
//     return 'hello';
// }

// // With template literals
// html =  `
//     <ul>
//         <li> Name: ${name} </li>
//         <li> Age: ${age} </li>
//         <li> Job: ${job} </li>
//         <li> ciyt: ${city} </li>
//         <li> ${2 + 2} </li>
//         <li> ${hello()} </li>
//         <li> ${age > 30 ? 'over 30 ' : 'Under 30'} </li>
//     </ul>
// `;

// document.body.innerHTML = html;

// //---------------ArrayMethods--------------------------------

// // create some arrays
// const numbers = [43,56, 33, 115, 44, 36, -50];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];

// console.log(mixed);

// let val;
// // Get array length
// val = numbers.length;

// // Check if is array
// val = Array.isArray(numbers)

// // Get single value
// val = numbers[3];
// val = numbers[0];

// // Insert into array
// numbers[2] = 100;

// // Find index of value
// val = numbers.indexOf(36);

// // Mutating arrays
// // Add on to end
// numbers.push(250);

// // Add on to front
// numbers.unshift(120);

// // Take off from the end
// numbers.pop();

// // Take off from the front
// numbers.shift();

// // Splice values
// numbers.splice(1,3);

// // Reverse
// numbers.reverse();

// //Concatenate array
// val = numbers.concat(numbers2);

// //Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y ){
//     return x-y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y ){
//     return y-x;
// });

// //Find
// function under50(num){
//     return num < 50;
// }

// val =  numbers.find(under50);
// console.log(numbers);
// console.log(val);

// //-------------------------Object literals------------------
// const person = {
//     firstName: 'Ishank',
//     lastName: 'Tyagi',
//     age: 21,
//     email: 'ishanktyagi98@gmail.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'meerut',
//         state: 'Up'
//     },
//     getBirthYear: function(){
//         return 2019 - this.age;
//     }
// };

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address;
// val = person.address.city;
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'Ishank', age: 21},
//     {name: 'Shashank', age: 26},
//     {name: 'Morty', age: 23}
// ]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

// //------------------------Dates & Time-----------------------
// let val;

// const today = new Date();
// let birthday = new Date('01-06-1998 11:25:00');
// birthday = new Date('January 6 1981');
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getMilliseconds();

// birthday.setMonth(2);
// birthday.setDate(11);
// birthday.setFullYear(1994);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// console.log(birthday) ;

// //---------------Comparison Operator -----------------------
// const id = 100;

// // Equal to
// if(id == 100){
//     console.log('correct'); // 100 == '100'
// }else{
//     console.log('incorrect');
// }

// // Not equal to
// if(id != 101){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// // Equal to value and type
// if(id === 100){
//     console.log('correct'); // 100 == '100'
// }else{
//     console.log('incorrect');
// }

// console.log(typeof(typeof 'id')); // return type of typeof operator

// // Test if undefined;
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// }else{
//     console.log('No ID');
// }

// // Greater or less than
// if(id >= 200){
//     console.log('correct');
// }else{
//     console.log('incorrect');
// }

// // If else
// const color = 'yellow';
// if(color === 'red'){
//     console.log('color is red');
// }else if(color === 'blue'){
//     console.log('color is blue');
// }else{
//     console.log('color is not red or blue');
// }

// // Logical operator
// const name = 'Ishank';
// const age = 21;

//  // And &&
// if(age > 0 && age < 12){
//     console.log(`${name} is child`);
// }else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// }else{
//     console.log(`${name} is an adult`);
// }

//  // Or ||
// if(age < 16 || age > 65){
//     console.log(`${name} can't run in race`);
// }else{
//     console.log(`${name} is regestered for the race`);
// }

// // Ternary Operator
// console.log(id === 100 ? 'Correct' : 'Incorrect');

// // Without Braces
// if(id === 100)
// 	console.log('correct');
// else
// 	console.log('incorrect');

// //-----------------------Switches-------------------------
// const color = 'green';
// switch(color){
//     case 'red' :
//         console.log('color is red');
//         break;
//     case 'blue' :
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');

// }

// let day;
// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }
// console.log(day);

// //--------------------Function Declarations----------------
// // return undefined by default
// //Function Declaration
// function greet(firstName = 'Ishank', lastName = 'Tyagi'){
//     //console.log('hello');
//     return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(greet('John', 'Doe'));
// console.log(greet());

// // Function Expression -- function as variable assignment
// // named or anonymous
// const square = function(x = 1){
//     return x*x;
// };

// console.log(square(8));
// console.log(square());

// // Immediately invocable function expression -- IIFEs
// // declare and run at the same time

// (function(){
//     console.log('IIFE Ran......');
// })();

// (function(name){
//     console.log('Hello ' + name);
// })('Ishank');

// // Property method
// const  todo = {
//     add: function(){
//         console.log('Add todo........');
//     },
//     edit: function(id){
//         console.log(`Edit todo  ${id}`);
//     }
// }
// todo.delete = function(){
//     console.log('Delete todo.........');
// }

// todo.add();
// todo.edit(23);
// todo.delete();

// //------------------------General Loops-----------------
// // For loop
// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favourite number');
//         continue;
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break;
//     }
//     console.log( 'Number ' + i);
// }

// // While loop
// let i = 0;

// while(i < 10) {
//     console.log('Number ' + i);
//     i++;
// }

// // Do while loop
// let i = 0;
// do {
//     console.log('Number ' + i);
//     i++;
// }
// while(i < 10);

// // Loop through the array
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// // for each
// cars.forEach(function(car, index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });

// // Map
// const users = [
//     {id: 1, name: 'Ishank'},
//     {id: 2, name: 'Shashank'},
//     {id: 3, name: 'David'},
//     {id: 4, name: 'Steve'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// // For in loop
// const user = {
//     firstName: 'Ishank',
//     lastName: 'Tyagi'
// };

// for(let x in user){
//     console.log(`${x}: ${user[x]}`);
// }

// //------------------A look at the Window Object--------------
// // Window methods / Objects / Properties
// window.console.log(123)

// // Alert
// window.alert('Hello World');

// // Prompt
// const input = prompt();
// input;
// alert(input);

// // Confirm
// if(confirm('Are you sure ?')){
//     console.log('YES');
// }else{
//     console.log('NO');
// }

// let val;
// //Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll points
// val = window.scrollY;
// val = window.scrollX;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // Redirect
// window.location.href = 'http://google.com';

// // Reload
// window.location.reload();

// // History Object
// window.history.go(-6);
// val = window.history.length;

// // Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);

// //------------------Scope---(let vs var)------------------
// // Global scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope ', a, b, c);
// }
// test();

// if(true){
//     // Block Scope
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Block scope ', a, b, c);
// }

// // let and const have block scope whereas var has function scope;

// for(var a = 0; a < 10; a++){
//     console.log(`loop: ${a}`);
// }
// console.log('Global Scope ', a, b, c);

// //----------------------------ES5 & ES6---------------------
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

// //---------------------------ES7-------------------------
// //--------- Includes (Added on strings & Arrays)--------
// const res1 = "hello".includes("0"); // true;
// const pets = ["cat", "dog", "bat"];
// console.log(pets.includes("dog")); // true

// //-------------------Exponential Operator-----------------
// const square = (x) => x ** 2;
// const cube = (x) => x ** 3;

// console.log(square(7));
// console.log(cube(4));

// // ------------------------------ES8-----------------------
// //------------- String Padding: .padStart(), .padEnd()-----
// const str = "Turtle";
// const str1 = str.padStart(10);
// const str2 = str.padEnd(10);
// console.log(str2);

// //------Trailing commas in Func's parameter list & calls---
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

//--------------------------ES10---------------------------------------
