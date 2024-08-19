// array
const myArr = [0,1,2,3,4,5]
// JavaScript has flexible array
// Indexing strat from 0
console.log(myArr[0])
// Arrays -=>> Copy Opearatio done on shallow copy
// Shallow copy -=> Heap
// Deep copy -=> Stack

const myHeroes = ["shaktiman","naagraaj"]
const myArr2 = new Array (1,2,3,4)

/* Try this in console of your browser
const numbers = [1,2,3,4]
-=> open prototype -=> another prototype
*/

// Array Mehods
myArr.push(6)
console.log(myArr);
myArr.push(7)
console.log(myArr)

myArr.pop() // no argument needed in it, last value is removed

myArr.unshift(9)
console.log(myArr); // inserted at start
myArr.shift()
console.log(myArr); 

console.log(myArr.includes(9)) // Questionaire methods true false answer only

console.log(myArr.indexOf(9))
console.log(myArr.indexOf(9))

const newArr = myArr.join() //adds all elements of an array into a string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// Slice & Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr)

const myn2 = myArr.splice(1,3)
console.log(myn2)

// In Splice the original array is been manipulated but in slice its not the same.





