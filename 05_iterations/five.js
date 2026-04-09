// for_each loop with arrays


const coding = ["python", "javascript", "ruby", "java", "c++"];

// // forEach with arrow function
coding.forEach((item) => {
    // console.log(item);
});



// forEach with regular function
coding.forEach(function (value){
    // console.log(value);
})



// forEach with named function
function printItem(item) {
    // console.log(item);
}

coding.forEach(printItem);



// forEach with index and array parameters a= current value, b= index, c= array
coding.forEach((a,b,c) => {
    // console.log(a,b,c);
});

// forEach does not support break and continue statements, so you cannot use them to control the flow of the loop.

// array of objects

const superheroes = [
    { name: "Iron Man", power: "Genius-level intellect", gender: "Male" },
    { name: "Captain America", power: "Superhuman strength", gender: "Male" },
    { name: "Doctor Strange", power: "Master of the mystic arts", gender: "Male" },
    { name: "Hulk", power: "Superhuman strength and durability", gender: "Male" },
    { name: "Thor", power: "God of Thunder", gender: "Male" },
    { name: "Black Widow", power: "Expert spy and martial artist", gender: "Female" }
];

superheroes.forEach((hero) => {
    console.log(`Name: ${hero.name} -- Power: ${hero.power} -- Gender: ${hero.gender}`);
});