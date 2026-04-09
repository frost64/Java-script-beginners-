// for loop

for (let index = 1; index <= 10; index++) {
    const element = index;
    // console.log(element);
}

let counter = 0;
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        // console.log(i, j);
        counter++;
    }
}
// console.log(counter);


let myArray = ["Iron Man", "Captain America", "Doctor Strange", "Hulk", "Thor","Black Widow"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (element === "Doctor Strange") {
        // console.log("Found Doctor Strange");
        break;
    }
    // console.log(element);
}


/* 
This will print all the superheroes until it finds Doctor Strange, 
then it will stop the loop and not print any more superheroes after that.
*/


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (element === "Doctor Strange") {
        // console.log(`Superhero found: ${element}`);
        break;
    }
//    console.log(`Superhero not matched: ${element}`);
}



/* 
This will print all the superheroes, but when it finds Doctor Strange, it will print "Superhero found: Doctor Strange" 
and then skip the rest of the code in that iteration and continue with the next iteration of the loop.
*/


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    if (element === "Doctor Strange") {
        console.log(`Superhero found: ${element}`);
        continue;
    }
//    console.log(`Superhero not matched: ${element}`);

}