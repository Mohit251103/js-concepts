// var - global scoped if declared outside a function
// let - block scoped ( is hoisted but not initialized so results in reference error)
// const - block scoped

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. It works with var keyword only.
// for ex.
console.log(x); // undefined
var x = "123";

// it is interpreted as :-
var x;
console.log(x);
x = "123";

// global scope of var
if(true){
    var say = "Hello";
}
console.log(say); // Hello
// If it was let then it would have returned an error as let is block scoped so any let variable within {} is independent and cannot be used outside the block.
// var also behave same in case of functions only. The global scope of var is not valid in case of functions so any var variable declared inside a function is also independent and cannot be used outside the block.

// Problem with var keyword 
var a = 1;
console.log(a); // 1
if(true){
    var a = 2;
}
console.log(a); // 2
// This reinitialization is sometime unintentional and cause a lot of errors in the code
// This problem is resolved by let keyword in ES6. It is block scoped and only updating is allowed not redeclaration

// const keyword prevents any updation as well as redeclaration of the data. It is also block scoped.
