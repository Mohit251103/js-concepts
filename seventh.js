
// IIFE, Modules, and Namespaces

// IIFE (Immediately Invoked Function Expression) is a function expression which is invoked as soon as it is initialized .
(function () {
    console.log(" IIFE running ... ");
})();


// asynchronous generators along with yield keyword and for await...of
async function* after100() {
    for (let i = 0; i < 30; i++) {
        yield new Promise(resolve=>{ setTimeout(()=> resolve(i),500) })
    }
}

    (async () => {
        for await (const value of after100()) {
            console.log(value);
        }
    })();

// ES Modules (ESM): The standard module system in modern JavaScript using import and export statements. Supported natively in modern browsers and Node.js.
//CommonJS (CJS): A module system used primarily in Node.js with require and module.exports.