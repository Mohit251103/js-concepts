// setInterval

// These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. In particular, they are supported in all browsers and Node.js.

// Syntax : let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// to stop the execution we can use clearInterval(timerId)

// let time = Date.now();
// const id = setInterval(()=>{
//     console.log(Date.now()-time);
//     time = Date.now();
// }, 500);

// For setInterval the function stays in memory until clearInterval is called.

// There’s a side effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So when we don’t need the scheduled function anymore, it’s better to cancel it, even if it’s very small.
