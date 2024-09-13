// Lexical Scoping means that the scope of a variable is determined by its position in the source code. In JavaScript, functions are lexically scoped, meaning that they remember the scope in which they were defined, and they can access variables from their outer scopes

function outerFunction() {
    let outerVariable = "I am from the outer scope";
    
    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable
    }
    
    innerFunction(); // Calling innerFunction
}

outerFunction(); // Output: "I am from the outer scope"


// A closure is a function that remembers the variables from its lexical scope even when the function is executed outside that scope. Closures allow a function to access variables from an outer function even after the outer function has returned.

function outerFunction() {
    let counter = 0;  // Local variable in outerFunction
    
    function incrementCounter() {  // Inner function (closure)
        counter++;
        console.log(counter);
    }
    
    return incrementCounter;
}

const increment = outerFunction(); // outerFunction returns the inner function

increment(); // Output: 1
increment(); // Output: 2
increment(); // Output: 3


// Practical example 

function createGreeting(greeting) {
    return function(name) {
        console.log(greeting + ", " + name + "!");
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

sayHello("Mohit"); // Output: "Hello, Mohit!"
sayHi("Negi"); // Output: "Hi, Negi!"
