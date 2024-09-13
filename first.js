// console.log("Hey I am intermediate .. 222");

// ...(spread) operator to spread all the elements of an iterable
let obj = {
    name:"Mohit",
    age:"21"
}

console.log(obj);

obj = {...obj,name:"Mohit Negi"};
console.log(obj);

// ...(rest) operator bundles all the variable arguments into single array
function func(...args){
    console.log(args);
}

func(1,2,3,4,5);

let arr = [1,2,3,4];
console.log(arr.join(", "))