// setTimeout

const id = setTimeout(()=>{
    console.log("Did it run for 10 seconds? ;) ");
}, 3000);

console.log(id);
clearTimeout(id); // will kill the timeout and stop the execution of the callback function 
console.log("I don't think so !! ");

// PASSING ARGUMENT TO setTimeout

function greet(name){
    console.log("Hello "+name);
}

setTimeout(greet, 1000, "Mohit");

let time = Date.now();
setTimeout(function greet(){
    console.log(Date.now()-time);
    time = Date.now();
    setTimeout(greet,500);
},500);