let a = new String("Mohit");
console.log(typeof a); // object 

let b = "Mohit";
console.log(typeof b); // string 

console.log(typeof null); //object --> used to define abscence of object
console.log(typeof undefined) //undefined --> used to define abscence of a value. It is default value in case of abscence of any value


console.log(Number.MAX_VALUE + " " + Number.MIN_VALUE);
console.log(12/ -0);
console.log(12/ +0);

let num = 10n; // n is used to specify that the value is of bigint type
console.log(typeof num);

let s = "こんにちは"; // because js use unicode encoding hence it supports a wide range of characters 
console.log(s);

// JS strings are immutable so String operation produces new string 

let arr = new Array(5);
arr.fill(1,0,5);
console.log(arr);

arr[0] = 2;
console.log(arr);

console.log(typeof ("41"+1));
console.log(typeof ("41"+100));