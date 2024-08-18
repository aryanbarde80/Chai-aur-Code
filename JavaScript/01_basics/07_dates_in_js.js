
// Dates

let myDate = new Date() // object and uska instance
console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

// practise more methods

console.log(typeof myDate); // imp for interview

// let myCreatedDate = new Date(2023,0,23) //months start from 0 in js
// console.log(myCreatedDate)
// console.lg(myCreatedDate.toDate.toDateString())

// let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toLocaleString())

// let myCreated = new Date("2023-01-14")
// console.log(myCreatedData.toLocaleString())

// let myCreated = new Date("01-14-2023")
// console.log(myCreatedData.toLocaleString())

let myTimeStamp = Date.now();;
console.log(myTimeStamp); //gives milisecond value from 1 jan 1970
console.log(Math.floor(Date.now()/1000)); // divided by 1k to avoid decimal value and to get in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

// ${newDate.getDay()} and the time

// *** IMP ***

newDate.toLocaleString('default',{ // default says internationalisation
    weekday:"long"
})



