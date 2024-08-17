const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); //false -->> due to symbol

const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
const bigNumber = 34569936412966666n

const hereos = ["shaktiman", "naagraj","doga"]

let myobj = {
    name:"aryan",
    age:22,
}

const myFunction = function (){
    console.log("Hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);

console.log(typeof myfunction);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(primitive), Heap(non-primitive)

let myYoutubename = "hiteshdotcom";
let anothername = "chaicode";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne
userTwo.email = "hitesh@google.com"
console.log(userOne.email)
console.log(userTwo.email)