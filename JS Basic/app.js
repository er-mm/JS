// document.querySelectorAll(".btn").forEach((item) => {
//   item.addEventListener("click", () => {
//     alert("this is good");
//   });
// });

// Helper Methods
// document.write("hello world"); // {name: 'mm'}
// // alert("hello world");
// console.log("hello world");

// string concatination
// const fname = "Mayank";
// const lastName = "Mittal";
// let fullName = fname + " " + lastName;
// console.log("your full name is: " + fullName);

//implicit type conversion
// const fname = "Mayank";
// const lastName = "Mittal";
// const value1 = fname - lastName;
// console.log(value1); // MayankMittal
// const value2 = fname + lastName;
// console.log(value2); // NaN
// let num1 = "10";
// let num2 = "45";
// console.log(num1 - num2); //-35 (it does implicit type converrsion)
// // its bad if I use + becaue its a string
// console.log(num1 + num2); //1045

// Datatypes
// Primitive - String, Number, Boolean, Null, Undefined, Symbol
// Object - Array, Functions. Objects
// typeof - operator (typeof variable) (typeof value)
// String
// const text = "some text";
// // nUmber
// const num = 32;
// // boolean - only have two values
// let value1 = true;
// let value2 = false;
// //null
// const result = null;
// // Undefined
// let res;
// //Symbol(ES6)
// console.log(typeof text);
// console.log(typeof num);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof result);
// console.log(typeof res);

// value vs reference
// const num = 2;
// let num2 = num;
// console.log(num, num2);
// num2 = 7;
// console.log(num, num2);

// //reference
// const arr = [1, 2, 3];
// let arr2 = arr;
// console.log(arr, arr2);
// arr2[2] = 4;
// console.log(arr, arr2);
// _____________________________________________________________________________

// 1. CallBack Functions. Higher Order Functions, Functions are first class objects/ Citizens
// 2. Functions are first class objects/ Citizens - stored in a variable (expression), passed as an argument to another function, return from the function (closure).
// 3. HOF: accepts another function as an argument or returns another function as a result
// 4. Callback function - pased to another function as an argument and executed inside that function

// function greetMorning(name) {
//   const myName = "MM";
//   console.log(`Good Morning ${name}, my name is ${myName}`);
// }

// function greetAfternoon(name) {
//   const myName = "MM";
//   console.log(`Good Afternoon ${name}, my name is ${myName}`);
// }

// greetMorning("Dikshit");
// greetAfternoon("Raman");

// better appraoch
function morning(name) {
  return `Good Morning ${name.toUpperCase()}`;
}

function afternoon(name) {
  return `Good afternoon ${name.toUpperCase()}`;
}

function greet(name, cb) {
  const myName = "MM";
  console.log(` ${cb(name)}, my name is ${myName}`);
}

greet("Raman", morning);
greet("Dikshit", afternoon);
