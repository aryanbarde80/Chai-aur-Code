//Constructor method

// const tinderUser = new Object() //single object
const tinderUser = {} // non-singleton object

console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

// Objects inside object

const regualarUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Aryan",
            lastname: "Barde"
        }
    }
}

console.log(regualarUser.fullname)
console.log(regualarUser.fullname.userfullname);
console.log(regualarUser.fullname.userfullname.firstname);

// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

//const obj3 = {obj1,obj2}
//console.log(obj3)

//const obj3 = Object.assign(obj1,obj2)
//console.log(obj3)

//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)

const obj3 = {...obj1,...obj2}
console.log(obj3)

const user = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

user[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));

console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// lets check some property present or not 
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// object destructuring and json api

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor)

const navbar = ({company}) => {
    navbar(company = "hitesh")
}


/*

{
    "name":"aryan",
    "coursesname":"js in hindi",
    "price" : "free"

}

[
    {},
    {},
    {}
]

// JSON -=> JavaScript Object Notation

*/



