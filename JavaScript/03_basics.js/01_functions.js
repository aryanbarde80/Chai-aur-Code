function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");
}

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);
// }

// addTwoNumbers()
// addTwoNumbers(3,4)
// addTwoNumbers(3,"4")
// addTwoNumbers(3,"a")
// addTwoNumbers(3,null)

// const result = addTwoNumbers(3,5)
// console.log("Result:", result)

function addTwoNumbers(number1,number2) {
    let result = number1 + number2
    return result
    //console.log("Hitesh") this does not executes bcoz return given
}

const result = addTwoNumbers(3,5)
console.log("Result: ",result);

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"));

function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage());

// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("Please enter a username: ");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage());

// In javascript, some values are considered false which are emptyString ("") & undefined.

function loginUserMessage(username = "sam") {
    if(username === undefined){
        console.log("Please enter a username: ");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

/*****************************************************************************************************************/

// Shopping Cart Issue

// Issue Code

// function calculateCartPrice(num1){
//     return num1 
// }
// console.log(calculateCartPrice(200,400,500));

// Solution is the spread and rest operator

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500));

function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,400,500,2000));


const user = {
    username:"hitesh",
    price:199,
    //prices:199 ->> try this with above commenting
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,40,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,400,100,500,1000]));









