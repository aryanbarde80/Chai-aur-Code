// Immediately Invoked Function Expression (IIFE)

// Below one is named iife
(function chai(){
    console.log(`DB Connected`);
    
})();

// IIFE is used to remove global scope pollution


// Below is unnamed iife
(() => {
    console.log(`DB Connected TWO`);
    
}) () ; // this (;) is very imp boz iife don't know where to stop, so add semicolon


// Below is iife with parameters
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')