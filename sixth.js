// Function declarations are hoisted, while function expressions are not.

// function declaration ( hoisted )
function runall(greet){
    greet();
}

// function expression ( not hoisted )
let greet = () => {
    console.log("Hello Konichiwa !!");
}

function you(runall){
    runall(greet);
}

you(runall);

runall(greet);