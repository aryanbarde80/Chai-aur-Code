const user = {
    user: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.user}, welcome to website`);
        console.log(this);
        
        // this keyword talks about the current context
        
    }
}

user.welcomeMessage()
user.username = "sam" // current context changed after this value
user.welcomeMessage()

console.log(this); //{ } ->> this refer the empty object in the node

// different in browser console bcoz it says window, which is global object there

function chai(){
    console.log(this);
    console.log(this.username); // says undefined // this keyword do not work for function
}
chai()

const chai1 = function chai(){
    console.log(this);
    console.log(this.username); // says undefined // this keyword do not work for function
}
chai1()

const chai2 = () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username);
    
}
chai2()

const addTwo = (num1,num2) => {
    return  num1+num2
}

console.log(addTwo(3,4));


//Implicit return
const addTwo1 = (num1,num2) => num1 + num2
console.log(addTwo1(3,4));

// Wrapping -=>> Curly me wrap kia to return likh otherwise nhi likhte

const addTwo2 = (num1,num2) => (num1+num2)
console.log(addTwo2(3,4));

//Explicit return is jab we use return keyword

/*****************************Object**********************************************/

const addTwo3 = (num1,num2) => { username:"hitesh"} // undefined is printed bcoz we cant use in this way
console.log(addTwo3)

//Needed to wrap 

const addTwo4 = (num1,num2) => ({username:"hitesh"})
console.log(addTwo4);



