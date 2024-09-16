// requestAnimationFrame - 

// it is used to create animations with good frame rate
// it is battery friendly
// the animations stop when the page is not active

// refer to index.html to see how it works

function step(timestamp){
    console.log(timestamp);
}

requestAnimationFrame(step);