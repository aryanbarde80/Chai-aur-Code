const score = 400 
console.log(score)

// Dedicatedly defining numbers with objects format
const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // two places after decimal

const otherNumber = 123.8966 // change to -->> 124

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // US Standards
console.log(hundreds.toLocaleString('en-IN')); // Indian Standards

// Browser Console
// Number -=> enter
// explore functions -=>> Min value, Max value,etc

//***************************************Maths***************************************************************/

// Math -=>> default/builtin js library

console.log(Math); // try in browser console and explore a lot
console.log(Math.abs(-4)); // modulus value -= 4
console.log(Math.round(4.3)); //round off value -= 4
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random()); //b/w 0 to 1
console.log(Math.floor(Math.random()*10)+1); // adding 1 to avoid zero for any random value

//Supposing we need a number b/w 1 to 6

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min) // added min to avoid the same value as that of above code gives




