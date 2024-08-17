let score = "33abc"
//let score = null ->> O/p = 0
//let score = undefined ->> O/p = NaN
//let score = true ->> O/p = 1
//let score = "hitesh" ->> O/p = NaN

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// Notes
// "33" => 33
// "33abc" => Nan // note:- type of NaN shows no. only
// true =>1 ; false =>0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) //O/p ->> true

// let isLoggedIn = " " // O/p ->> false
// let isLoggedIn = "hitesh" ->> true


// Notes

//1 => true;
//0 => false
//" " => false
//"hitesh" =>true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/************************************************ Operations ***********************************************/

let value = 3
let negValue = -value
// console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/

// Tricky Conversion 
let str1 = "hello"
let str2 = " hitesh"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //22
console.log(1 + 2 + "2"); //32

console.log(3+4*5%3); // not good way
console.log((3+4)*5%3); // better way

console.log(true); //true
console.log(+true); //1
// console.log(true+); //error
console.log(+" ");

let num1,num2,num3
num1 = num2 = num3 = 2+2 // not good way

let gameCounter = 100
gameCounter++;
console.log(gameCounter); // 101
// ++gameCounter; O/p ->> 101



