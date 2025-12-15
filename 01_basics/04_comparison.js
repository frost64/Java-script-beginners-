
//---------------------------------- Simple Comparisons -----------------------------//

// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2>=1);
// console.log(2<=1);


//---------------------------------- String Conversions ----------------------------//

// console.log("Raza" > "Asjid");
// console.log("Raza" > 1);
// console.log("Raza" < 1);
// console.log("Raza" == 1);
// console.log("Raza" != 1);

// console.log("Raza" >= 1);
// console.log("Raza" <= 1);


// console.log(null == 0);
// console.log(null < 0);
// console.log(null > 0);
// console.log(null >= 0);
// console.log(null <= 0);

/*
    comparison operator treats null as null whereas the >=/<= converts null to number that is 0 
*/

let nullcheck1 = null;
let nullcheck2 = Number(nullcheck1);

// console.log(nullcheck1);
// console.log(nullcheck2);


console.log(2===2);  // Strict Check checks both datatype and value
console.log("2" == 2);
console.log("2" === 2);
