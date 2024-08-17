const name = "hitesh"
const repoCount = 50
// console.log(name + repoCount + " value");

//interpolation -->> placing things in placeholders in modernjs

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another way to declare

const gameName = new String('hitesh')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

// String methods through console of browser
// #best way

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne.trim());

const url = "https//:hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '_'))
console.log('hitesh')
console.log(gameName.split('__'))
