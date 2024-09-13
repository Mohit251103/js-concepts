
// primitive values are copied by value 
// objects are copied by reference

let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10 because a is copied into b by value and not reference.

// copy by reference

a = { value: 10 };
b = a;
a.value = 20;
console.log(a); // {value:20}
console.log(b); // {value:20}


function increment(number){
    number.value++;
}

increment(a);
console.log(a);

const mySym = Symbol("sym1");
const obj = {
    value:1,
    [mySym]: "123"
}

console.log(obj["value"] , typeof obj[mySym]);

// "==" (loose equality) --> checks only value after coercion
// "===" (strict equality) --> checks both type and value 
