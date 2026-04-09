// while loop

let index = 1;
while (index <= 5) {
    // console.log(`The index value: ${index}`);
    index = index+1;
}



// working on arrays with while loop

let myArray = ["Iron Man", "Captain America", "Doctor Strange", "Hulk", "Thor","Black Widow"];


let i = 0;
while (i < myArray.length) {
    const element = myArray[i];
    // console.log(element);
    i++;
}

let j = 0;
while (j < myArray.length) {
    const element = myArray[j];
    if (element === "Doctor Strange") { 
        // console.log(`Superhero found: ${element}`);
    }
    // console.log(element);
    j++;
}


// do while loop

let temp = 100;
do {
    // console.log(`The temperature is: ${temp}`);
    temp = temp + 1;
} while (temp<10);


// for my own practice

ind = 0;
flag = false;
do {
    hero = "Spider Man";
    if (myArray[ind] === hero) {
        flag = true;
    }
    ind++;  
} while (ind<myArray.length);
if (flag) {
    console.log(`${hero} is in the league!`);
} else {
    console.log(`${hero} is out of the league!`);
}   