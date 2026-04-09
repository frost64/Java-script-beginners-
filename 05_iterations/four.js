/*
for in loop is used to iterate over the properties of an object. It is not 
recommended to use for in loop to iterate over arrays, 
as it can lead to unexpected results.
*/

let myObj = {
 '00' : "Iron Man", 
 '01' : "Black Panther",
 '02' : "Captain America", 
 '03' : "Doctor Strange", 
 '04' : "Hulk", 
 '05' : "Thor",
 '06' : "Black Widow"
};

for (const key in myObj) {
    // console.log(`Key:  ${key} ----- Value:  ${myObj[key]}`);        
}



// for in loop with arrays

let myArray1 =  ["Iron Man", "Black Panther", "Captain America", "Doctor Strange", "Hulk", "Thor", "Black Widow"];
for (const key in myArray1) {
    // console.log(key);   // logs the index of the array elements, not the values
    // console.log(myArray1[key]); // logs the values of the array elements
    // console.log(`Key:  ${key} ----- Value:  ${myArray1[key]}`);        
}   


