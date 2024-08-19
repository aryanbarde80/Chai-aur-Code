// /* Objects can be declared in two ways
// 1.literals method
// 2.constructor method
// */

// //singleton object -=> constructor
// //in the literal method we got created with multiple instances no the singleton

// const JsUser = {
//     name:"Hitesh",
//     "fullname" : "Hitesh Choudhary",
//     [mySym]:"myKey1",
//     age:"18",
//     location:"Jaipur",
//     email:"hitesh@google.com",
//     isLoggedIn:false,
//     lastLoginDays:["Monday","Saturday"]
// }

// // Non-preferred way
// console.log(JsUser.email)

// // Preffered way
// //con.log(JsUser[email]) <--== Treated as string so wrong thus below way
// console.log(JsUser["email"]);

// //error --> console.log(JsUser."fullname")
// // Only square notation works 

// /*************************************************Symbol***********************************************************/

// const mySym = Symbol("key1") //declaration
// console.log(JsUser.[mySym])
// JsUser.email = "hitesh@chatgpt.com" //override and value changed 

// //Object.freeze(JsUser) //changes not propagated 
// //JsUser.email = "hitesh@microsoft.com"

// console.log(JsUser);

// // In js, functions has no discriminations,treated as variable

// JsUser.greeting = function() {
//     console.log("Hello JS User");
// }

// console.log(JsUser.greeting());

// UserActivation.greetingTwo = function() {
//     console.log(`Hello Js User`)
// }

// console.log(JsUser())
// console.log(JsUser.greetingTwo());

const mySym = Symbol("key1"); // Declare the symbol first

const JsUser = {
    name: "Hitesh",
    fullname: "Hitesh Choudhary",
    [mySym]: "myKey1",
    age: "18",
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Non-preferred way
console.log(JsUser.email);

// Preferred way
console.log(JsUser["email"]);

// Correct way to access the symbol property
console.log(JsUser[mySym]);

// Override email value
JsUser.email = "hitesh@chatgpt.com";

// Object.freeze(JsUser); // Uncomment this to make the object immutable
// JsUser.email = "hitesh@microsoft.com"; // This will not work if object is frozen

console.log(JsUser);

// Adding a function to JsUser
JsUser.greeting = function() {
    console.log("Hello JS User");
};

console.log(JsUser.greeting());

// If you want to add another function, ensure you add it to the correct object
JsUser.greetingTwo = function() {
    console.log("Hello JS User");
};

console.log(JsUser.greetingTwo());

// Make sure you do not call the object like a function
// console.log(JsUser()); <-- This is incorrect because JsUser is not a function




