/*
For...of loop is used to iterate over iterable objects like arrays, 
strings, maps, sets, etc.It allows you to loop through the values 
of an iterable object directly.
*/


let myArray = ["Iron Man", "Captain America", "Doctor Strange", "Hulk", "Thor","Black Widow"];


for (const num of myArray) {
    // console.log(num);        
}





let str = "Hello World!";
for (const element of str) {
    // console.log(`Chr :${element}`);
}


/*
Maps (unique keys and values) are also iterable, so you can use 
for...of loop to iterate through them.
*/


let myMap = new Map();
myMap.set("name", "John");
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("city", "New York");

// console.log(myMap); // Map(3) { 'name' => 'John', 'age' => 30, 'city' => 'New York' }

for (const [key, value] of myMap) {
    // console.log(`${key} ----- ${value}`);
}       


let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

// for (const [key, value] of obj) { // TypeError: obj is not iterable
//     console.log(`${key} ----- ${value}`);
// }

/*
Objects are not iterable by default, so you cannot use for...of loop 
directly on them. However, you can use Object.entries() to convert 
the object into an array of key-value pairs, which can then be 
iterated using for...of loop. but for...in loop is used to iterate over the enumerable 
properties of an object, not the values. It allows you to loop through the keys of an object.
*/

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key} ----- ${value}`);
}       