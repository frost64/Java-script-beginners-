//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["Aquaman", "Flash", "Ironman"];
let myObj = {
    name: "Asjid",
    age: 27,
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//-------------------------------------------------------------------//

// Stack (Primitive), Heap (Non-Primitive)
let my_sign = "Frost"
let copy_sign = my_sign;
// console.log(my_sign)
// console.log(copy_sign)

copy_sign = "Frosty64"
// console.log(my_sign)
// console.log(copy_sign)


let user1 = {
    name : "Asjid",
    Age: 27,
    Location : "London"
}

let user2 = user1

// console.log(user1.name)
// console.log(user2.name)

user2.name = my_sign

console.log(user1.name)
console.log(user2.name)     